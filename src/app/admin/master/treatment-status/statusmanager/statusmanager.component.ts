import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-statusmanager',
  templateUrl: './statusmanager.component.html',
  styleUrls: ['./statusmanager.component.css']
})
export class StatusmanagerComponent implements OnInit {

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

   statusForm:any;
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
   }
  
   
   add(item:any) {
 
     this.statusForm = this.fb.group({ 
     
      Status : [item?item.status:'', [Validators.required]],
     })
 
 
   
   }
 
   get f() { return this.statusForm.controls; }
   submitForm(){
     console.log(this.statusForm.value);
     this.submitted = true;
     console.log('runn 2234',this.statusForm.invalid)
 
     if (this.statusForm.invalid) {
     //  this.submited = false;
      return;
     }
     this.api.loader('start');
     let data:any =this.api.getAuthDetail()
     let userinfo =  JSON.parse(data.user);
     let obj = this.statusForm.value
     if(this.flag == 'Add'){
       obj['CreateById'] = userinfo.umId;
      //  obj['therapySubcategoryId'] = 0;
       this.api.postData('/api/N_TreatmentStatus/Post',obj,'POST').subscribe(res => {
         console.log(res);
         this.api.loader('stop');
         this.passEntry.emit(true);
       this.modal.close();
         // document.getElementById('close-pop')?.click();
       
       });    
     } else{
        //  obj['therapySubcategoryId'] = this.detail.therapySubcategoryId;
       obj['Id'] = this.detail.id;
       obj['ModifyById'] = userinfo.umId;
       this.api.putData('/api/N_TreatmentStatus/put',obj,'put').subscribe(res => {
         console.log(res);
         this.api.loader('stop');
         this.passEntry.emit(true);
         this.modal.close();
         // document.getElementById('close-pop')?.click();
       
       }); 
     }
   }
 




 
 
}
