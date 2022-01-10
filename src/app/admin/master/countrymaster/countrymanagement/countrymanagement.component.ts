import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-countrymanagement',
  templateUrl: './countrymanagement.component.html',
  styleUrls: ['./countrymanagement.component.css']
})
export class CountrymanagementComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  countryform:any;
  submitted:any= false;
  flag:any;
  countryDetail:any;

  constructor(private fb: FormBuilder,public modal: NgbActiveModal, private api: ApiService ) { 

  }

  ngOnInit(): void {
    console.log('ruunq23')
    if(this.flag == 'Add'){
      this.addcountryform(null)
    }
    this.addcountryform(this.countryDetail);
 
  }

  addcountryform(item:any) {
    this.countryform = this.fb.group({ 
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      // description: ['', [Validators.required]],
 
    })
    this.countryform.patchValue({
      code: item?item.code:'',
      name: item?item.name:'',
      // description: item&&item.description?item.description:'',
      
    })
  
  }

  get f() { return this.countryform.controls; }

  submitForm(){
    console.log(this.countryform.value);
    this.submitted = true;
    console.log('runn 2234',this.countryform.invalid)
    if (this.countryform.invalid) {
    //  this.submited = false;
     return;
    }
    this.api.loader('start');
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = this.countryform.value

    if(this.flag == 'Add'){
      obj['CreateById'] = userinfo.umId;
      this.api.postData('/api/N_CountryMaster/Post',obj,'POST').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
      this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      });    
    } else{
        obj['Id'] = this.countryDetail.id;
      obj['ModifyById'] = userinfo.umId;
      this.api.putData('/api/N_CountryMaster/put',obj,'put').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
        this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      }); 
    }
  }
}
