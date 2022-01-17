import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeetypemanagementComponent } from './employeetypemanagement/employeetypemanagement.component'

import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-employee-type',
  templateUrl: './employee-type.component.html',
  styleUrls: ['./employee-type.component.css']
})
export class EmployeeTypeComponent implements OnInit {

  empTpylist: any;
  selectType: any;
  collection: any = [];
  p = 1;
  constructor(private api: ApiService, private modalService: NgbModal, ) {
    this.getempTpylist();
  }

  ngOnInit(): void {
  }

  getempTpylist() {
    this.empTpylist = undefined;
    this.api.fetchData('/api/N_EmployeeType/GetAll', {}, 'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if (res['status'] == 200) {
        let item = []
        this.empTpylist = res['result'];


      } else {
        this.api.showNotification('error', 'Failed to fetch data.');

      }
    });
  }

  deletecustomer() {
    this.api.loader('start');
    let data: any = this.api.getAuthDetail()
    let userinfo = JSON.parse(data.user);
    let obj = {
      id: this.selectType.id,
      IsDelete: true,
      DeleteById: userinfo.umId
    }
    this.api.deleteData('/api/N_EmployeeType/delete', obj, 'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop') ?.click();
      this.getempTpylist();

    });
  }

  onclick(item: any, key: string) {
    const modalRef = this.modalService.open(EmployeetypemanagementComponent, { size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      console.log(receivedEntry);
      this.getempTpylist();

      // this.employedetail = receivedEntry;
    })
  }


}
