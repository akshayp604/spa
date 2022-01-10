import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-therapyskillmanager',
  templateUrl: './therapyskillmanager.component.html',
  styleUrls: ['./therapyskillmanager.component.css']
})
export class TherapyskillmanagerComponent implements OnInit {

  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  category:any = [];
  usremp:any = [];
  spaList:any = [];
  subcategory:any = [];
  skillForm:any;
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
     this.getemplist();
     this.getsubcategorylist();
     this.getspalist();
   }
  
   
   add(item:any) {
 
     this.skillForm = this.fb.group({ 
     
      TmId : [item?item.tmId:'', [Validators.required]],
      UserTherapistName : [item?item.userTherapistName:'', [Validators.required]],
      TherapyCategoryId : [item?item.therapyCategoryId:'', [Validators.required]],
      TherapyCategoryName : [item?item.therapyCategoryName:'', [Validators.required]],
      TherapySubCategoryId : [item?item.therapySubCategoryId:'', [Validators.required]],
      TherapySubCategoryName : [item?item.therapySubCategoryName:'', [Validators.required]],
      IsBest : [item?item.isBest:''],
      Description : [item?item.description:'', [Validators.required]],
      SpaId : [item?item.spaId:'', [Validators.required]],
      SpaName : [item?item.spaName:'', [Validators.required]],
  
     })
 
 
   
   }
 
   get f() { return this.skillForm.controls; }
   submitForm(){
     console.log(this.skillForm.value);
     this.submitted = true;
     console.log('runn 2234',this.skillForm.invalid)
 
     if (this.skillForm.invalid) {
     //  this.submited = false;
      return;
     }
     this.api.loader('start');
     let data:any =this.api.getAuthDetail()
     let userinfo =  JSON.parse(data.user);
     let obj = this.skillForm.value
     obj['TmId'] = parseInt( obj['TmId'])
     obj['TherapyCategoryId'] = parseInt( obj['TherapyCategoryId'])
     obj['TherapySubCategoryId'] = parseInt( obj['TherapySubCategoryId'])
     obj['SpaId'] = parseInt( obj['SpaId'])
     if(this.flag == 'Add'){
       obj['CreateById'] = userinfo.umId;
      //  obj['therapySubcategoryId'] = 0;
       this.api.postData('/api/N_TherapistSkills/Post',obj,'POST').subscribe(res => {
         console.log(res);
         this.api.loader('stop');
         this.passEntry.emit(true);
       this.modal.close();
         // document.getElementById('close-pop')?.click();
       
       });    
     } else{
        //  obj['therapySubcategoryId'] = this.detail.therapySubcategoryId;
       obj['TsId'] = this.detail.tsId;
       obj['ModifyById'] = userinfo.umId;
       this.api.putData('/api/N_TherapistSkills/put',obj,'put').subscribe(res => {
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
        this.category = res['result'];
   

      }else{
        this.api.showNotification('error', 'Failed to fetch data.');
        
      }
    });
  }

  getsubcategorylist(){
    this.api.fetchData('/api/N_TherapySubcategory/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        this.subcategory = res['result'];
   

      }else{
        this.api.showNotification('error', 'Failed to fetch data.');
        
      }
    });
  }
  getspalist(){
    this.api.fetchData('/api/N_SpaMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        this.spaList = res['result'];
   

      }else{
        this.api.showNotification('error', 'Failed to fetch data.');
        
      }
    });
  }
  getemplist(){
    this.api.fetchData('/api/N_TherapistMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        this.usremp = res['result'];
      }else{
        this.api.showNotification('error', 'Failed to fetch data.');
        
      }
    });
  }
  onchnage(e:any, key:string){
    if(key == 'spa') {
      let x = this.spaList.findIndex((f:any) => f.id == e.target.value);
      if(x != -1) {
        this.skillForm.patchValue({
          SpaName:this.spaList[x].spaName
        })
      } 
    }
    if(key == 'subcategory') {
      let x = this.subcategory.findIndex((f:any) => f.id == e.target.value);
      if(x != -1) {
        console.log(this.subcategory[x]);
        this.skillForm.patchValue({
          TherapySubCategoryName:this.subcategory[x].name
        })
      } 
    }
    if(key == 'category') {
      let x = this.category.findIndex((f:any) => f.id == e.target.value);
      if(x != -1) {
        this.skillForm.patchValue({
          TherapyCategoryName:this.category[x].name
        })
      } 
    }
    if(key == 'user') {
      let x = this.usremp.findIndex((f:any) => f.tmId == e.target.value);
      if(x != -1) {
        this.skillForm.patchValue({
          UserTherapistName:this.usremp[x].userTherapistName
        })
      } 
    }
  }
}
