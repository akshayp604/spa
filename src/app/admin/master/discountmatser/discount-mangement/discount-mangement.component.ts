import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-discount-mangement',
  templateUrl: './discount-mangement.component.html',
  styleUrls: ['./discount-mangement.component.css']
})
export class DiscountMangementComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  discountForm:any;
  submitted:any= false;
  flag:any;
  detail:any;
  constructor(private fb: FormBuilder,public modal: NgbActiveModal, private api: ApiService ) { 
  
  }

  ngOnInit(): void {
    console.log('ruunq23')
    if(this.flag == 'Add'){
      this.adddiscount(null)
    }
    this.adddiscount(this.detail);
 
  }

  adddiscount(item:any) {

    this.discountForm = this.fb.group({ 
      DiscountCode: [item?item.discountCode:'', [Validators.required]],
      DiscountPercent: [item?item.discountPercent:'', [Validators.required]],

      // Password:[item?item.password:'', [Validators.required]],

      // CreateById:[item?item.registrationDate:'', [Validators.required]],
      // description: ['', [Validators.required]],
 
    })
    // this.discountForm.patchValue({
    //   code: item?item.code:'',
    //   name: item?item.name:'',
    //   // description: item&&item.description?item.description:'',
      
    // })
  
  }

  get f() { return this.discountForm.controls; }

  submitForm(){
    console.log(this.discountForm.value);
    this.submitted = true;
    console.log('runn 2234',this.discountForm.invalid)
    if (this.discountForm.invalid) {
    //  this.submited = false;
     return;
    }
    this.api.loader('start');
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = this.discountForm.value
    obj['DiscountPercent'] = obj['DiscountPercent'].toString()
    if(this.flag == 'Add'){
      obj['CreateById'] = userinfo.umId;
      this.api.postData('/api/N_DiscountMaster/Post',obj,'POST').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
      this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      });    
    } else{
        obj['DId'] = this.detail.dId;
      obj['ModifyById'] = userinfo.umId;
      this.api.putData('/api/N_DiscountMaster/put',obj,'put').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
        this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      }); 
    }
  }

 
 
}
