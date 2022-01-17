import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-statusmanager',
  templateUrl: './statusmanager.component.html',
  styleUrls: ['./statusmanager.component.css']
})
export class StatusmanagerComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  stateForm:any;
  submitted:any= false;
  flag:any;
  detail:any;

  constructor(private fb: FormBuilder,public modal: NgbActiveModal, private api: ApiService ) { 

  }

  ngOnInit(): void {
    if(this.flag == 'Add'){
      this.statemanager(null)
    }
    this.statemanager(this.detail);
    console.log('ruunq23', this.detail)
 
  }

  statemanager(item:any) {
    this.stateForm = this.fb.group({ 
      Status: ['', [Validators.required]],
      // description: ['', [Validators.required]],
 
    })
    this.stateForm.patchValue({
      Status: item?item.status:'',
      // description: item&&item.description?item.description:'',
      
    })
  
  }

  get f() { return this.stateForm.controls; }

  submitForm(){
    console.log(this.stateForm.value);
    this.submitted = true;
    console.log('runn 2234',this.stateForm.invalid)
    if (this.stateForm.invalid) {
    //  this.submited = false;
     return;
    }
    this.api.loader('start');
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = this.stateForm.value

    if(this.flag == 'Add'){
      obj['CreateById'] = userinfo.umId;
      this.api.postData('/api/N_ReservationStatus/Post',obj,'POST').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
      this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      });    
    } else{
        obj['Id'] = this.detail.id;
      obj['ModifyById'] = userinfo.umId;
      this.api.putData('/api/N_ReservationStatus/put',obj,'put').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
        this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      }); 
    }
  }
}
