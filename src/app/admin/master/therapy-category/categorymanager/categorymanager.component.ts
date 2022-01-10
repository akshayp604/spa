import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-categorymanager',
  templateUrl: './categorymanager.component.html',
  styleUrls: ['./categorymanager.component.css']
})
export class CategorymanagerComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

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
    
  }
 
  
  add(item:any) {

    this.categoryForm = this.fb.group({ 
      Name : [item?item.name:'', [Validators.required]],
 
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
      this.api.postData('/api/N_TherapyCategory/Post',obj,'POST').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
      this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      });    
    } else{
        obj['Id'] = this.detail.id;
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


}
