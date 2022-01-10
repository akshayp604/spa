import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-managment',
  templateUrl: './customer-managment.component.html',
  styleUrls: ['./customer-managment.component.css']
})
export class CustomerManagmentComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  customerForm:any;
  submitted:any= false;
  flag:any;
  detail:any;
  countrylist:any =[];
  statelist:any =[];
  filterstate:any =[];
  constructor(private fb: FormBuilder,public modal: NgbActiveModal, private api: ApiService ) { 
    this.getstatelist();
    this.getcountrylist();
  }

  ngOnInit(): void {
    console.log('ruunq23')
    if(this.flag == 'Add'){
      this.addcustomerForm(null)
    }
    this.addcustomerForm(this.detail);
 
  }

  addcustomerForm(item:any) {
    this.customerForm = this.fb.group({ 
      RegistrationDate: [item?item.registrationDate:new Date(), [Validators.required]],
      FirstName: [item?item.firstName:'', [Validators.required]],
      MiddleName: [item?item.middleName:'', [Validators.required]],
      LastName:[item?item.lastName:'', [Validators.required]],
      Email:[item?item.email:'', [Validators.required,Validators.email]],
      UserName:[item?item.userName:'', [Validators.required]],
      // Password:[item?item.password:'', [Validators.required]],
      ContactNo:[item?item.contactNo:'', [Validators.required]],
      CountryId:[item?item.countryId:'', [Validators.required]],
      CountryName:[item?item.countryName:'', [Validators.required]],
      CountryCode:[item?item.countryCode:'', [Validators.required]],
      StateId:[item?item.stateId:'', [Validators.required]],
      StateName:[item?item.stateName:'', [Validators.required]],
      City:[item?item.city:'', [Validators.required]],
      Address1:[item?item.address1:'', [Validators.required]],
      Address2:[item?item.address2:'', [Validators.required]],
      ZipCode:[item?item.zipCode:'', [Validators.required]],
      // CreateById:[item?item.registrationDate:'', [Validators.required]],
      // description: ['', [Validators.required]],
 
    })
    // this.customerForm.patchValue({
    //   code: item?item.code:'',
    //   name: item?item.name:'',
    //   // description: item&&item.description?item.description:'',
      
    // })
  
  }

  get f() { return this.customerForm.controls; }

  submitForm(){
    console.log(this.customerForm.value);
    this.submitted = true;
    console.log('runn 2234',this.customerForm.invalid)
    if (this.customerForm.invalid) {
    //  this.submited = false;
     return;
    }
    this.api.loader('start');
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = this.customerForm.value
    obj['CountryId'] = parseInt( obj['CountryId']);
    obj['StateId'] =parseInt( obj['StateId']);
    if(this.flag == 'Add'){
      obj['CreateById'] = userinfo.umId;
      this.api.postData('/api/N_CustomerMaster/Post',obj,'POST').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
      this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      });    
    } else{
        obj['CMId'] = this.detail.cmId;
      obj['ModifyById'] = userinfo.umId;
      this.api.putData('/api/N_CustomerMaster/put',obj,'put').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
        this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      }); 
    }
  }

  getcountrylist(){
    this.api.fetchData('/api/N_CountryMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        let item = []
        this.countrylist = res['result'];
   

      }else{
        this.api.showNotification('error', 'Failed to fetch data.');
        
      }
    });
  }
  getstatelist(){
    this.api.fetchData('/api/N_StateMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        let item = []
        this.statelist = res['result'];
   

      }else{
        this.api.showNotification('error', 'Failed to fetch data.');
        
      }
    });
  }
  onselect(e:any){
    console.log(e.target.value);
    let x = this.countrylist.findIndex((f:any)=> f.id == e.target.value);
    if(x != -1) {
      this.customerForm.patchValue({
        CountryName:this.countrylist[x]['name'],
        CountryCode:this.countrylist[x]['code'],
      })
    }
    this.filterstate = this.statelist.filter((f:any)=> f.countryId == e.target.value);
  }
  onselectstate(e:any){
    console.log(e.target.value);
    let x = this.filterstate.findIndex((f:any)=> f.id == e.target.value);
    if(x != -1) {
      this.customerForm.patchValue({
        StateName:this.countrylist[x]['name'],
      })
    }
  }
}
