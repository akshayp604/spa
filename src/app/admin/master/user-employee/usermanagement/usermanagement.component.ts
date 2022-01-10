import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  category:any = [];
  categoryForm:any;
   submitted:any= false;
   flag:any;
   detail:any;
   country:any =[];
 
     constructor(private fb: FormBuilder,public modal: NgbActiveModal, private api: ApiService ) { 
   
   }
 
   ngOnInit(): void {
     console.log('ruunq23')
     if(this.flag == 'Add'){
       this.add(null)
     }
     this.add(this.detail);
     this.getcategories();
   }
  
   
   add(item:any) {
 
     this.categoryForm = this.fb.group({ 
      FirstName : [item?item.firstName:'', [Validators.required]],
      MiddleName : [item?item.middleName:'', [Validators.required]],
      LastName : [item?item.lastName:'', [Validators.required]],
      Email : [item?item.email:'', [Validators.required]],
      UserName : [item?item.userName:'', [Validators.required]],
      Password : [item?item.password:'', [Validators.required]],
      ContactNo : [item?item.contactNo:'', [Validators.required]],
      GenderId : [item?item.genderId:'', [Validators.required]],
      Gender : [item?item.gender:'', [Validators.required]],
      CountryId : [item?item.countryId:'', [Validators.required]],
      CountryCode : [item?item.countryCode:'', [Validators.required]],
      CountryName : [item?item.countryName:'', [Validators.required]],
      StateId : [item?item.stateId:'', [Validators.required]],
      StateCode : [item?item.stateCode:'', [Validators.required]],
      StateName : [item?item.stateName:'', [Validators.required]],
      City : [item?item.city:'', [Validators.required]],
      ZipCode : [item?item.zipCode:'', [Validators.required]],
      Address1 : [item?item.address1:'', [Validators.required]],
      Address2 : [item?item.address2:'', [Validators.required]],
      EmpTypeId : [item?item.empTypeId:'', [Validators.required]],
      EmpType : [item?item.empType:'', [Validators.required]],
      IsAdmin : [item?item.isAdmin:'', [Validators.required]],
      JoiningDate : [item?item.joiningDate:'', [Validators.required]],
      TerminationDate : [item?item.terminationDate:'', [Validators.required]],
      Incentive : [item?item.incentive:'', [Validators.required]],
      Salary : [item?item.salary:'', [Validators.required]],
      RatePerHour : [item?item.ratePerHour:'', [Validators.required]],
  
     })
 
 
   
   }
 
   get f() { return this.categoryForm.controls; }
   submitForm(){
     console.log(this.categoryForm.value);
     this.submitted = true;
     console.log('runn 2234',this.categoryForm.invalid)
 
     if (this.categoryForm.invalid) {
     //  this.submited = false;
      return;
     }
     this.api.loader('start');
     let data:any =this.api.getAuthDetail()
     let userinfo =  JSON.parse(data.user);
     let obj = this.categoryForm.value
     if(this.flag == 'Add'){
       obj['CreateById'] = userinfo.umId;
      //  obj['therapySubcategoryId'] = 0;
       this.api.postData('/api/N_TherapyCategory/Post',obj,'POST').subscribe(res => {
         console.log(res);
         this.api.loader('stop');
         this.passEntry.emit(true);
       this.modal.close();
         // document.getElementById('close-pop')?.click();
       
       });    
     } else{
        //  obj['therapySubcategoryId'] = this.detail.therapySubcategoryId;
       obj['ModifyById'] = userinfo.umId;
       this.api.putData('/api/N_TherapyCategory/put',obj,'put').subscribe(res => {
         console.log(res);
         this.api.loader('stop');
         this.passEntry.emit(true);
         this.modal.close();
         // document.getElementById('close-pop')?.click();
       
       }); 
     }
   }
 
   getcategories(){
    this.api.fetchData('/api/N_TherapyCategory/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        let item = []
        this.category = res['result'];
   

      }else{
        this.api.showNotification('error', 'Failed to fetch data.');
        
      }
    });
  }

}