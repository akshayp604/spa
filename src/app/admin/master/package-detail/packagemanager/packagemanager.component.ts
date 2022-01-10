import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-packagemanager',
  templateUrl: './packagemanager.component.html',
  styleUrls: ['./packagemanager.component.css']
})
export class PackagemanagerComponent implements OnInit {

  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  category:any = [];
  usremp:any = [];
  spaList:any = [];
  subcategory:any = [];
  packageForm:any;
   submitted:any= false;
   flag:any;
   detail:any;
   country:any =[];
   package:any =[];
 
     constructor(private fb: FormBuilder,public modal: NgbActiveModal, private api: ApiService ) { 
   
   }
 
   ngOnInit(): void {
     console.log('ruunq23')
     if(this.flag == 'Add'){
       this.add(null)
     }
     this.add(this.detail);
     this.getcategories();
     this.getsubcategorylist();
     this.getpackage()
   }
  
   
   add(item:any) {
 
     this.packageForm = this.fb.group({ 
     
      PMId : [item?item.pmId:'', [Validators.required]],
      TherapyCategoryId : [item?item.therapyCategoryId:'', [Validators.required]],
      TherapyCategoryName : [item?item.therapyCategoryName:'', [Validators.required]],
      TherapySubCategoryId : [item?item.therapySubCategoryId:'', [Validators.required]],
      TherapySubCategoryName : [item?item.therapySubCategoryName:'', [Validators.required]],
      Duration: [item?item.duration:''],
      Description : [item?item.description:'', [Validators.required]],
      Price : [item?item.price:'', [Validators.required]],
      Discount : [item?item.discount:'', [Validators.required]],
  
     })
 
 
   
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
     obj['PMId'] = parseInt(obj['PMId']);
     obj['TherapyCategoryId'] = parseInt(obj['TherapyCategoryId']);
     obj['TherapySubCategoryId'] = parseInt(obj['TherapySubCategoryId']);
     obj['Price'] = parseFloat(obj['Price']);
     if(this.flag == 'Add'){
       obj['CreateById'] = userinfo.umId;
      //  obj['therapySubcategoryId'] = 0;
       this.api.postData('/api/N_PackageDetail/Post',obj,'POST').subscribe(res => {
         console.log(res);
         this.api.loader('stop');
         this.passEntry.emit(true);
       this.modal.close();
         // document.getElementById('close-pop')?.click();
       
       });    
     } else{
        //  obj['therapySubcategoryId'] = this.detail.therapySubcategoryId;
       obj['PDId'] = this.detail.pdId;
       obj['ModifyById'] = userinfo.umId;
       this.api.putData('/api/N_PackageDetail/put',obj,'put').subscribe(res => {
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
  getpackage(){
    this.api.fetchData('/api/N_PackageMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        this.package = res['result'];
   

      }else{
        this.api.showNotification('error', 'Failed to fetch data.');
        
      }
    });
  }
 
  onchnage(e:any, key:string){
    if(key == 'spa') {
      let x = this.spaList.findIndex((f:any) => f.id == e.target.value);
      if(x != -1) {
        this.packageForm.patchValue({
          SpaName:this.spaList[x].spaName
        })
      } 
    }
    if(key == 'subcategory') {
      let x = this.subcategory.findIndex((f:any) => f.id == e.target.value);
      if(x != -1) {
        console.log(this.subcategory[x]);
        this.packageForm.patchValue({
          TherapySubCategoryName:this.subcategory[x].name
        })
      } 
    }
    if(key == 'category') {
      let x = this.category.findIndex((f:any) => f.id == e.target.value);
      if(x != -1) {
        this.packageForm.patchValue({
          TherapyCategoryName:this.category[x].name
        })
      } 
    }
    if(key == 'user') {
      let x = this.usremp.findIndex((f:any) => f.tmId == e.target.value);
      if(x != -1) {
        this.packageForm.patchValue({
          UserTherapistName:this.usremp[x].userTherapistName
        })
      } 
    }
  }
}
