import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StatusmanagerComponent } from './statusmanager/statusmanager.component';

import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-reservation-status',
  templateUrl: './reservation-status.component.html',
  styleUrls: ['./reservation-status.component.css']
})
export class ReservationStatusComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  list: any;
  selected: any;
  collection: any = [];
  p = 1;

  constructor(private api: ApiService, private modalService: NgbModal, ) {
    this.getlist();
  }

  ngOnInit(): void {
  }

  getlist() {
    this.list = undefined;
    this.api.fetchData('/api/N_ReservationStatus/GetAll', {}, 'GET').subscribe(res => {
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
    this.api.deleteData('/api/N_ReservationStatus/delete', obj, 'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop') ?.click();
      this.getlist();

    });
  }

  onclick(item: any, key: string) {
    const modalRef = this.modalService.open(StatusmanagerComponent, { size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    console.log(item)
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      console.log(receivedEntry);
      this.getlist();

      // this.employedetail = receivedEntry;
    })
  }
}
