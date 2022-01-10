import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-availabilitymanager',
  templateUrl: './availabilitymanager.component.html',
  styleUrls: ['./availabilitymanager.component.css']
})
export class AvailabilitymanagerComponent implements OnInit {

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

   availavilitiesForm:any;
   submitted:any= false;
   flag:any;
   detail:any;
 
   roomList:any =[];
   minDate:any = new Date();
   date:any = new Date();
    
 
     constructor(private fb: FormBuilder,public modal: NgbActiveModal, private api: ApiService ) { 
   
   }
 
   ngOnInit(): void {
     this.date.setDate(this.date.getDate() + 7);
     console.log('ruunq23',this.date)
     if(this.flag == 'Add'){
       this.add(null)
     }
     this.add(this.detail);
     this.getroom();
   }
  
   
   add(item:any) {
 
     this.availavilitiesForm = this.fb.group({ 
      RoomName : [item?item.roomName:'', [Validators.required]],
      RoomId : [item?item.roomId:'', [Validators.required]],
      Date : [item && item.date? formatDate(item.date, 'yyyy-MM-dd', 'en'):'', [Validators.required]],
      IsAvailable : [item?item.isAvailable:false],

     })
 
 
   
   }
 
   get f() { return this.availavilitiesForm.controls; }

   getroom(){
    this.roomList = undefined;
    this.api.fetchData('/api/N_RoomMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        this.roomList = res['result'];
      }else{
        this.api.showNotification('error', 'Failed to fetch data.');
        
      }
    });
  }
   submitForm(){
     this.submitted = true;
     console.log('runn 2234',this.availavilitiesForm.invalid)
 
     if (this.availavilitiesForm.invalid) {
     //  this.submited = false;
      return;
     }
     this.api.loader('start');
     let data:any =this.api.getAuthDetail()
     let userinfo =  JSON.parse(data.user);
     let obj = this.availavilitiesForm.value

     obj['RoomId'] = parseInt(obj['RoomId']);
     console.log(obj);
     if(this.flag == 'Add'){
       obj['CreateById'] = userinfo.umId;
      //  obj['therapySubcategoryId'] = 0;
       this.api.postData('/api/N_RoomAvaliability/Post',obj,'POST').subscribe(res => {
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
       this.api.putData('/api/N_RoomAvaliability/put',obj,'put').subscribe(res => {
         console.log(res);
         this.api.loader('stop');
         this.passEntry.emit(true);
         this.modal.close();
         // document.getElementById('close-pop')?.click();
       
       }); 
     }
   }
 

  //  onChangeValue(e:any){
  //    if(e.target.value){
  //     this.availavilitiesForm.get('FromDate').setValidators([Validators.required]); // 5.Set Required Validator
  //     this.availavilitiesForm.get('ToDate').setValidators([Validators.required]); // 5.Set Required Validator
  //     this.availavilitiesForm.get('FromDate').updateValueAndValidity();
  //     this.availavilitiesForm.get('ToDate').updateValueAndValidity();
  //    }else{
  //     this.availavilitiesForm.get('ToDate').clearValidators(); // 6. Clear All Validators
  //     this.availavilitiesForm.get('ToDate').updateValueAndValidity();
  //     this.availavilitiesForm.get('FromDate').clearValidators(); // 6. Clear All Validators
  //     this.availavilitiesForm.get('FromDate').updateValueAndValidity();
  //    }

  //  }

   onselect(e:any){
    let x = this.roomList.findIndex((f:any) => f.rmId == e.target.value);
    if(x != -1) {
      this.availavilitiesForm.patchValue({
        RoomName:this.roomList[x].roomName,
      })
    } 
   }

}
