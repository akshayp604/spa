import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-packagemanger',
  templateUrl: './packagemanger.component.html',
  styleUrls: ['./packagemanger.component.css']
})
export class PackagemangerComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  packageForm:any;
  submitted:any= false;
  flag:any;
  detail:any;
  Duration:any = {
    hour: 0,
    // minute: 0
 };
  time:any;

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

    this.packageForm = this.fb.group({ 
      Name : [item?item.name:'', [Validators.required]],
      Description : [item?item.description:'', [Validators.required]],
      Duration: [item?item.duration:'', [Validators.required]],
      Price : [item?item.price:'', [Validators.required]],
      Discount: [item?item.discount:new Date(), [Validators.required]],
  
    })

    // this.packageForm.patchValue({
    //   code: item?item.code:'',
    //   name: item?item.name:'',
    //   // description: item&&item.description?item.description:'',
      
    // })
  
  }

  get f() { return this.packageForm.controls; }
  submitForm(){
    console.log(this.packageForm.value);
    this.submitted = true;
    console.log('runn 2234',this.packageForm.invalid)

    if (this.packageForm.invalid) {
    //  this.submited = false;
     return;
    }
    this.api.loader('start');
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = this.packageForm.value
    if(this.flag == 'Add'){
      obj['CreateById'] = userinfo.umId;
      this.api.postData('/api/N_PackageMaster/Post',obj,'POST').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
      this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      });    
    } else{
        obj['PmId'] = this.detail.pmId;
      obj['ModifyById'] = userinfo.umId;
      this.api.putData('/api/N_PackageMaster/put',obj,'put').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
        this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      }); 
    }
  }

 
}
