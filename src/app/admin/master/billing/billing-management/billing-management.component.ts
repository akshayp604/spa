import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-billing-management',
  templateUrl: './billing-management.component.html',
  styleUrls: ['./billing-management.component.css']
})
export class BillingManagementComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  billForm:any;
  submitted:any= false;
  flag:any;
  billDetail:any;

  constructor(private fb: FormBuilder,public modal: NgbActiveModal, private api: ApiService ) { 

  }

  ngOnInit(): void {
    console.log('ruunq23')
    if(this.flag == 'Add'){
      this.addbillForm(null)
    }
    this.addbillForm(this.billDetail);
 
  }

  addbillForm(item:any) {
    this.billForm = this.fb.group({ 
      status: ['', [Validators.required]],
      // description: ['', [Validators.required]],
 
    })
    this.billForm.patchValue({
      status: item?item.status:'',
      // description: item&&item.description?item.description:'',
      
    })
  
  }

  get f() { return this.billForm.controls; }

  submitForm(){
    console.log(this.billForm.value);
    this.submitted = true;
    console.log('runn 2234',this.billForm.invalid)
    if (this.billForm.invalid) {
    //  this.submited = false;
     return;
    }
    this.api.loader('start');
    let data:any = this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = this.billForm.value

    if(this.flag == 'Add'){
      obj['CreateById'] = userinfo.umId;
      this.api.postData('/api/N_BillingStatus/Post',obj,'POST').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
      this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      });    
    } else{     
      obj['Id'] = this.billDetail.id;
      obj['ModifyById'] = userinfo.umId;
      this.api.putData('/api/N_BillingStatus/put',obj,'put').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
        this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      }); 
    }
  }


}
