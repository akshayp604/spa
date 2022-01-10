import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-therapiestmanager',
  templateUrl: './therapiestmanager.component.html',
  styleUrls: ['./therapiestmanager.component.css']
})
export class TherapiestmanagerComponent implements OnInit {

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  therapyForm:any;
   submitted:any= false;
   flag:any;
   detail:any;
   spalist:any =[];
   userEmplist:any =[];
 
     constructor(private fb: FormBuilder,public modal: NgbActiveModal, private api: ApiService ) { 
   
   }
 
   ngOnInit(): void {
     console.log('ruunq23')
     if(this.flag == 'Add'){
       this.add(null)
     }
     this.add(this.detail);
     this.getuseremplistdata();
     this.getAllSpa();
   }
  
   
   add(item:any) {
  
     this.therapyForm = this.fb.group({ 
      userTherapistId : [item?item.userTherapistId:'', [Validators.required]],
      userTherapistName : [item?item.userTherapistName:'', [Validators.required]],
      spaId : [item?item.spaId:'', [Validators.required]],
      spaName : [item?item.spaName:'', [Validators.required]],
  
     })
 
 
   
   }
 
   get f() { return this.therapyForm.controls; }
   submitForm(){
     console.log(this.therapyForm.value);
     this.submitted = true;
     console.log('runn 2234',this.therapyForm.invalid)
 
     if (this.therapyForm.invalid) {
     //  this.submited = false;
      return;
     }
     this.api.loader('start');
     let data:any =this.api.getAuthDetail()
     let userinfo =  JSON.parse(data.user);
     let obj = this.therapyForm.value
     obj['userTherapistId'] = parseInt(obj['userTherapistId']);
     obj['spaId'] = parseInt(obj['spaId']);
     if(this.flag == 'Add'){
       obj['createById'] = userinfo.umId;
       this.api.postData('/api/N_TherapistMaster/Post',obj,'POST').subscribe(res => {
         console.log(res);
         this.api.loader('stop');
         this.passEntry.emit(true);
       this.modal.close();
         // document.getElementById('close-pop')?.click();
       
       });    
     } else{
         obj['tmId'] = this.detail.tmId;
       obj['modifyById'] = userinfo.umId;
       this.api.putData('/api/N_TherapistMaster/put',obj,'put').subscribe(res => {
         console.log(res);
         this.api.loader('stop');
         this.passEntry.emit(true);
         this.modal.close();
         // document.getElementById('close-pop')?.click();
       
       }); 
     }
   }
 
   getAllSpa(){
    // this.spalist = undefined;
    this.api.fetchData('/api/N_SpaMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
     
        this.spalist = res['result'];
      
        // this.setPagination();

      }else{
        this.api.showNotification('error', 'Failed to fetch spaList.');
        
      }
    });
  }
   getuseremplistdata(){
    // this.spalist = undefined;
    this.api.fetchData('/api/N_UserEmployee/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
     
        this.userEmplist = res['result'];
      
        // this.setPagination();

      }else{
        this.api.showNotification('error', 'Failed to fetch spaList.');
        
      }
    });
  }

  onchnage(e:any, key:string){
    if(key == 'spa') {
      let x = this.spalist.findIndex((f:any) => f.id == e.target.value);
      if(x != -1) {
        this.therapyForm.patchValue({
          spaName:this.spalist[x].spaName
        })
      } 
    }
    if(key == 'user') {
      let x = this.userEmplist.findIndex((f:any) => f.umId == e.target.value);
      if(x != -1) {
        this.therapyForm.patchValue({
          userTherapistName:this.userEmplist[x].firstName
        })
      } 
    }
  }

}
