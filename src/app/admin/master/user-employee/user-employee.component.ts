import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';

import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-user-employee',
  templateUrl: './user-employee.component.html',
  styleUrls: ['./user-employee.component.css']
})
export class UserEmployeeComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  list: any;
  selected: any;
  collection: any = [];
  p = 1;

  constructor(private api: ApiService, private modalService: NgbModal, ) {

    this.getuserList();
  }

  ngOnInit(): void {
  }

  getuserList() {
    this.list = undefined;
    this.api.fetchData('/api/N_UserEmployee/GetAll', {}, 'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if (res['status'] == 200) {
        this.list = res['result'];


      } else {
        this.api.showNotification('error', 'Failed to fetch data.');

      }
    });
  }

  delete() {
    this.api.loader('start');
    let data: any = this.api.getAuthDetail()
    let userinfo = JSON.parse(data.user);
    let obj = {
      Id: this.selected.id,
      IsDelete: true,
      DeleteById: userinfo.umId
    }
    this.api.deleteData('/api/N_UserEmployee/delete', obj, 'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop') ?.click();
      this.getuserList();

    });
  }

  onclick(item: any, key: string) {
    const modalRef = this.modalService.open(UsermanagementComponent, { size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      console.log(receivedEntry);
      this.getuserList();

      // this.employedetail = receivedEntry;
    })
  }
}
