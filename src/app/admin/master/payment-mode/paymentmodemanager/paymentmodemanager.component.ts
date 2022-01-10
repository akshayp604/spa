import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-paymentmodemanager',
  templateUrl: './paymentmodemanager.component.html',
  styleUrls: ['./paymentmodemanager.component.css']
})
export class PaymentmodemanagerComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  modeForm:any;
  submitted:any= false;
  flag:any;
  detail:any;

    constructor(private fb: FormBuilder,public modal: NgbActiveModal, private api: ApiService ) { 
  
  }

  ngOnInit(): void {
    console.log('ruunq23')
    if(this.flag == 'Add'){
      this.add(null)
    }
    this.add(this.detail);
    
  }
 
  
  add(item:any) {

    this.modeForm = this.fb.group({ 
      Modes : [item?item.modes:'', [Validators.required]],
    
  
    })


  
  }

  get f() { return this.modeForm.controls; }
  submitForm(){
    console.log(this.modeForm.value);
    this.submitted = true;
    console.log('runn 2234',this.modeForm.invalid)

    if (this.modeForm.invalid) {
    //  this.submited = false;
     return;
    }
    this.api.loader('start');
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = this.modeForm.value
    if(this.flag == 'Add'){
      obj['CreateById'] = userinfo.umId;
      this.api.postData('/api/N_PaymentMode/Post',obj,'POST').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
      this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      });    
    } else{
        obj['Id'] = this.detail.id;
      obj['ModifyById'] = userinfo.umId;
      this.api.putData('/api/N_PaymentMode/put',obj,'put').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
        this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      }); 
    }
  }

 
}
