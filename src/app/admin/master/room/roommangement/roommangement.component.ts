import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-roommangement',
  templateUrl: './roommangement.component.html',
  styleUrls: ['./roommangement.component.css']
})
export class RoommangementComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  roomForm:any;
  submitted:any= false;
  flag:any;
  roomDetail:any;
  spalist:any = [];

  constructor(private fb: FormBuilder,public modal: NgbActiveModal, private api: ApiService ) { 

  }

  ngOnInit(): void {
    console.log('ruunq23')
    if(this.flag == 'Add'){
      this.addroomForm(null)
    }
    this.addroomForm(this.roomDetail);
    this.getAllSpa()
  }

  addroomForm(item:any) {
    this.roomForm = this.fb.group({ 
      // spaname: ['', [Validators.required]],
      capacity: ['', [Validators.required]],
      roomName: ['', [Validators.required]],
      spaId: ['', [Validators.required]],
      spaName: [''],
 
    })
    this.roomForm.patchValue({
      roomName: item?item.roomName:'',
      spaId: item?item.spaId:'',
      capacity: item&&item.capacity?item.capacity:'',
      spaName: item&&item.capacity?item.spaName:'',
      
    })
  
  }

  get f() { return this.roomForm.controls; }

  submitForm(){
    console.log(this.roomForm.value);
    this.submitted = true;
    console.log('runn 2234',this.roomForm.invalid)
    if (this.roomForm.invalid) {
    //  this.submited = false;
     return;
    }
    this.api.loader('start');
    let data:any = this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = this.roomForm.value
    obj['spaId'] = parseInt(obj['spaId']);
    if(this.flag == 'Add'){
      obj['CreateById'] = userinfo.umId;

      this.api.postData('/api/N_RoomMaster/Post',obj,'POST').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
      this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      });    
    } else{
      obj['RMId'] = this.roomDetail.rmId;
      obj['ModifyById'] = userinfo.umId;
      this.api.putData('/api/N_RoomMaster/put',obj,'put').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
        this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      }); 
    }
  }

  getAllSpa(){
    this.spalist = undefined;
    this.api.fetchData('/api/N_SpaMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
       
        this.spalist = res['result'];


      }else{
        this.api.showNotification('error', 'Failed to fetch roomlist.');
        
      }
    });
  }

  onchnage(event:any){
    if(event.target.value) {
     let x = this.spalist.findIndex((f:any) => f.id = event.target.value);
     if(x != -1){
       this.roomForm.patchValue({
         spaName:this.spalist[x].spaName
       })
     }
    }
  }

}
