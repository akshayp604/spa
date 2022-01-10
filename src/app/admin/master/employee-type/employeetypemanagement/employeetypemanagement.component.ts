import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-employeetypemanagement',
  templateUrl: './employeetypemanagement.component.html',
  styleUrls: ['./employeetypemanagement.component.css']
})
export class EmployeetypemanagementComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  empTypeForm:any;
  submitted:any= false;
  flag:any;
  detail:any;
  constructor(private fb: FormBuilder,public modal: NgbActiveModal, private api: ApiService ) { 
  
  }

  ngOnInit(): void {
    console.log('ruunq23')
    if(this.flag == 'Add'){
      this.addempType(null)
    }
    this.addempType(this.detail);
 
  }

  addempType(item:any) {

    this.empTypeForm = this.fb.group({ 
      Name: [item?item.name:'', [Validators.required]],
      // DiscountPercent: [item?item.discountPercent:'', [Validators.required]],

      // Password:[item?item.password:'', [Validators.required]],

      // CreateById:[item?item.registrationDate:'', [Validators.required]],
      // description: ['', [Validators.required]],
 
    })
    // this.empTypeForm.patchValue({
    //   code: item?item.code:'',
    //   name: item?item.name:'',
    //   // description: item&&item.description?item.description:'',
      
    // })
  
  }

  get f() { return this.empTypeForm.controls; }
  submitForm(){
    console.log(this.empTypeForm.value);
    this.submitted = true;
    console.log('runn 2234',this.empTypeForm.invalid)
    if (this.empTypeForm.invalid) {
    //  this.submited = false;
     return;
    }
    this.api.loader('start');
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = this.empTypeForm.value
    if(this.flag == 'Add'){
      obj['CreateById'] = userinfo.umId;
      this.api.postData('/api/N_EmployeeType/Post',obj,'POST').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
      this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      });    
    } else{
        obj['Id'] = this.detail.id;
      obj['ModifyById'] = userinfo.umId;
      this.api.putData('/api/N_EmployeeType/put',obj,'put').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
        this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      }); 
    }
  }

 
}
