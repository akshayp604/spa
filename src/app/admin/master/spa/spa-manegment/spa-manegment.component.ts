import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-spa-manegment',
  templateUrl: './spa-manegment.component.html',
  styleUrls: ['./spa-manegment.component.css']
})
export class SpaManegmentComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  spaForm:any;
  submitted:any= false;
  flag:any;
  spaDetail:any;

  constructor(private fb: FormBuilder,public modal: NgbActiveModal, private api: ApiService ) { 

  }

  ngOnInit(): void {
    console.log('ruunq23')
    if(this.flag == 'Add'){
      this.addspaForm(null)
    }
    this.addspaForm(this.spaDetail);
 
  }

  addspaForm(item:any) {
    this.spaForm = this.fb.group({ 
      spaName: ['', [Validators.required]],
      // description: ['', [Validators.required]],
 
    })
    this.spaForm.patchValue({
      spaName: item?item.spaName:'',
      // description: item&&item.description?item.description:'',
      
    })
  
  }

  get f() { return this.spaForm.controls; }

  submitForm(){
    console.log(this.spaForm.value);
    this.submitted = true;
    console.log('runn 2234',this.spaForm.invalid)
    if (this.spaForm.invalid) {
    //  this.submited = false;
     return;
    }
    this.api.loader('start');
    let obj = this.spaForm.value;
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);

    if(this.flag == 'Add'){
      obj['CreateById'] = userinfo.umId;
      this.api.postData('/api/N_SpaMaster/Post',obj,'POST').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
      this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      });    
    } else{
      obj['Id'] = this.spaDetail.id;
      obj['ModifyById'] = userinfo.umId;
      this.api.putData('/api/N_SpaMaster/put',this.spaForm.value,'put').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
        this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      }); 
    }
  }


}
