import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {EmpleavemanagementComponent} from './empleavemanagement/empleavemanagement.component'
@Component({
  selector: 'app-employee-leaves',
  templateUrl: './employee-leaves.component.html',
  styleUrls: ['./employee-leaves.component.css']
})
export class EmployeeLeavesComponent implements OnInit {

 
  emplist:any;
  selectemp:any;
  constructor(private api: ApiService, private modalService: NgbModal,) { 
    this.getemplist();
  }

  ngOnInit(): void {
  }

  getemplist(){
    this.emplist = undefined;
    this.api.fetchData('/api/N_EmployeeLeaves/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        let item = []
        this.emplist = res['result'];
   

      }else{
        this.api.showNotification('error', 'Failed to fetch data.');
        
      }
    });
  }

  delete(){
    this.api.loader('start');
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = {
      ElId:this.selectemp.elId,
      IsDelete:true,
      DeleteById:userinfo.umId
    }
    this.api.deleteData('/api/N_EmployeeLeaves/delete',obj,'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop')?.click();
      this.getemplist();
    
    });
  }

  onclick(item:any,key:string){
    const modalRef = this.modalService.open(EmpleavemanagementComponent,  {size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    console.log(receivedEntry);
    this.getemplist();

    // this.employedetail = receivedEntry;
    })
  }

}
