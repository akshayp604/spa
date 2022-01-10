import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-insentiv-manager',
  templateUrl: './insentiv-manager.component.html',
  styleUrls: ['./insentiv-manager.component.css']
})
export class InsentivManagerComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  insentiveForm:any;
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
    this.insentiveForm = this.fb.group({ 
      Name : [item?item.name:'', [Validators.required]],
      Insentive_Percentage : [item?item.insentive_Percentage:'', [Validators.required]],
      Insentive_Category: [item?item.insentive_Category:'', [Validators.required]],

      // DiscountPercent: [item?item.discountPercent:'', [Validators.required]],

      // Password:[item?item.password:'', [Validators.required]],

      // CreateById:[item?item.registrationDate:'', [Validators.required]],
      // description: ['', [Validators.required]],
 
    })
    
    // this.insentiveForm.patchValue({
    //   code: item?item.code:'',
    //   name: item?item.name:'',
    //   // description: item&&item.description?item.description:'',
      
    // })
  
  }

  get f() { return this.insentiveForm.controls; }
  submitForm(){
    console.log(this.insentiveForm.value);
    this.submitted = true;
    console.log('runn 2234',this.insentiveForm.invalid)

    if (this.insentiveForm.invalid) {
    //  this.submited = false;
     return;
    }
    this.api.loader('start');
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = this.insentiveForm.value
    if(this.flag == 'Add'){
      obj['CreateById'] = userinfo.umId;
      this.api.postData('/api/N_InsentiveMaster/Post',obj,'POST').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
      this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      });    
    } else{
        obj['id'] = this.detail.id;
      obj['ModifyById'] = userinfo.umId;
      this.api.putData('/api/N_InsentiveMaster/put',obj,'put').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
        this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      }); 
    }
  }

}
