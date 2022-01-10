import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-therapysubcatmanager',
  templateUrl: './therapysubcatmanager.component.html',
  styleUrls: ['./therapysubcatmanager.component.css']
})
export class TherapysubcatmanagerComponent implements OnInit {

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
      // Name : [item?item.name:'', [Validators.required]],
      Price : [item?item.price:'', [Validators.required]],
      Duration : [item?item.duration:'', [Validators.required]],
      Description : [item?item.description:'', [Validators.required]],
      // TherapySubcategoryId : [item?item.therapySubcategoryId:'', [Validators.required]],
      TherapySubcategoryName : [item?item.therapySubcategoryName:'', [Validators.required]],
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
       obj['TherapySubcategoryId'] = this.detail.therapySubcategoryId;
       this.api.postData('/api/N_TherapySubcategoryDetail/Post',obj,'POST').subscribe(res => {
         console.log(res);
         this.api.loader('stop');
         this.passEntry.emit(true);
       this.modal.close();
         // document.getElementById('close-pop')?.click();
       
       });    
     } else{
        //  obj['therapySubcategoryId'] = this.detail.therapySubcategoryId;
        obj['Id'] = this.detail.id;
        obj['TherapySubcategoryId'] = this.detail.therapySubcategoryId;
       obj['ModifyById'] = userinfo.umId;
       this.api.putData('/api/N_TherapySubcategoryDetail/put',obj,'put').subscribe(res => {
         console.log(res);
         this.api.loader('stop');
         this.passEntry.emit(true);
         this.modal.close();
         // document.getElementById('close-pop')?.click();
       
       }); 
     }
   }
 
   getcategories(){
    this.api.fetchData('/api/N_TherapySubcategoryDetail/GetAll',{},'GET').subscribe(res => {
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

  onselectcat(e:any) {
    let x = this.category.findIndex((f:any) => f.id == e.target.value);
    if(x != -1) {
      this.categoryForm.patchValue({
        TherapyCategoryName: this.category[x]['name']
      })
    }
  }

}
