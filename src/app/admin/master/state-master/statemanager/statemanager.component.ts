import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-statemanager',
  templateUrl: './statemanager.component.html',
  styleUrls: ['./statemanager.component.css']
})
export class StatemanagerComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  stateForm:any;
  submitted:any= false;
  flag:any;
  detail:any;
  country:any =[];

    constructor(private fb: FormBuilder,public modal: NgbActiveModal, private api: ApiService ) { 
  
  }

  ngOnInit(): void {
    this.getcountrylist()
    console.log('ruunq23')
    if(this.flag == 'Add'){
      this.add(null)
    }
    this.add(this.detail);
    
  }
 
  
  add(item:any) {

    this.stateForm = this.fb.group({ 
      Name : [item?item.name:'', [Validators.required]],
      Code : [item?item.code:'', [Validators.required]],
      CountryId : [item?item.countryId:'', [Validators.required]],
      CountryCode : [item?item.CountryCode:'', [Validators.required]],
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
     obj['CountryId'] = parseInt(obj['CountryId'])
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
  onchange(e:any){
    let x = this.country.findIndex((f:any) => f.id == e.target.value);
    if(x!= -1){
      this.stateForm.patchValue({
        CountryCode: this.country[x]['code']
      })
    }
  }

  getcountrylist(){
    this.api.fetchData('/api/N_CountryMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        let item = []
        this.country = res['result'];
   

      }else{
        this.api.showNotification('error', 'Failed to fetch data.');
        
      }
    });
  }
}
