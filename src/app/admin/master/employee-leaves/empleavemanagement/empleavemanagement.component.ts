import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-empleavemanagement',
  templateUrl: './empleavemanagement.component.html',
  styleUrls: ['./empleavemanagement.component.css']
})
export class EmpleavemanagementComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  empLeaveForm:any;
  submitted:any= false;
  flag:any;
  detail:any;
  userlist:any =[];
  fromDate:any= new Date();
  toDate:any = new Date();
  fromTIme:any = '0:00';
  toTime:any ='0:00';
    constructor(private fb: FormBuilder,public modal: NgbActiveModal, private api: ApiService ) { 
  
  }

  ngOnInit(): void {
    console.log('ruunq23')
    if(this.flag == 'Add'){
      this.addempleave(null)
    }
    this.addempleave(this.detail);
    this.GetuserList();
    
  }
  GetuserList(){
    
    this.api.fetchData('/api/N_UserEmployee/GetAll',{},'get').subscribe(res => {
      console.log(res);
      if(res['status'] == 200) {
        this.userlist = res['result']
        
      } else{
        this.userlist =[];

      }
      // document.getElementById('close-pop')?.click();
    
    }); 
  }
  
  addempleave(item:any) {
    // console.log(this.api.convertDate(item.fromdate));
    // console.log(new Date(this.api.convertDate(item.toDate)));
    this.empLeaveForm = this.fb.group({ 
      UserEmployeeId : [item?item.userEmployeeId:'', [Validators.required]],
      UserEmployee : [item?item.userEmployee:'', [Validators.required]],
      EmployeeTypeId: [item?item.employeeTypeId:'', [Validators.required]],
      EmployeeType : [item?item.employeeType:'', [Validators.required]],
      LeaveDate: [item?item.leaveDate:new Date(), [Validators.required]],
      ReasonForleave: [item?item.reasonForleave:'', [Validators.required]],
      IsFullTime: [item?item.isFullTime:''],
      Fromdate: [item && item.fromdate?formatDate(item.fromdate, 'yyyy-MM-dd', 'en'):'', [Validators.required]],
      ToDate: [item && item.toDate?formatDate(item.toDate, 'yyyy-MM-dd', 'en'):'', [Validators.required]],

      FromTime: [item?item.fromTime:'' ],
      // Fromdate:[item?this.api.convertDate(item.fromdate).toString():'' ],
      // Fromdate:[item?item.fromdate:'' ],
      ToTime:[item?item.toTime:'', ],
      // ToDate:[item?this.api.convertDate(item.toDate).toString():'']
      // ToDate:[item?item.toDate:''] 
    })

    // this.empLeaveForm.patchValue({
    //   code: item?item.code:'',
    //   name: item?item.name:'',
    //   // description: item&&item.description?item.description:'',
      
    // })
  
  }

  get f() { return this.empLeaveForm.controls; }
  submitForm(){
    console.log(this.empLeaveForm.value);
    this.submitted = true;
    console.log('runn 2234',this.empLeaveForm.invalid)

    if (this.empLeaveForm.invalid) {
    //  this.submited = false;
     return;
    }
    this.api.loader('start');
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = this.empLeaveForm.value
    obj['UserEmployeeId'] = parseInt(obj['UserEmployeeId']);
    if(this.flag == 'Add'){
      obj['CreateById'] = userinfo.umId;
      this.api.postData('/api/N_EmployeeLeaves/Post',obj,'POST').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
      this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      });    
    } else{
        obj['ELId'] = this.detail.elId;
      obj['ModifyById'] = userinfo.umId;
      this.api.putData('/api/N_EmployeeLeaves/put',obj,'put').subscribe(res => {
        console.log(res);
        this.api.loader('stop');
        this.passEntry.emit(true);
        this.modal.close();
        // document.getElementById('close-pop')?.click();
      
      }); 
    }
  }

  onselect(e:any){
    console.log(e.target.value);
    let x = this.userlist.findIndex((f:any)=> f.umId == e.target.value);
    if(x != -1) {
      this.empLeaveForm.patchValue({
        UserEmployee:this.userlist[x]['firstName'],
        EmployeeTypeId:(this.userlist[x]['empTypeId']),
        EmployeeType:this.userlist[x]['empType']
      });
    }
  }
}
