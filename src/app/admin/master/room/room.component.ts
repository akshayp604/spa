import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RoommangementComponent } from './roommangement/roommangement.component'

import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  roomlist: any;
  selectedroom: any;
  collection: any = [];
  p = 1;

  constructor(private api: ApiService, private modalService: NgbModal, ) {
    this.getAllroom();
  }

  ngOnInit(): void {
  }

  getAllroom() {
    this.roomlist = undefined;
    this.api.fetchData('/api/N_RoomMaster/GetAll', {}, 'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if (res['status'] == 200) {

        this.roomlist = res['result'];

        // this.setPagination();

      } else {
        this.api.showNotification('error', 'Failed to fetch room.');

      }
    });
  }

  deleteroom() {
    this.api.loader('start');
    let data: any = this.api.getAuthDetail()
    let userinfo = JSON.parse(data.user);

    let obj = {
      RMId: this.selectedroom.rmId,
      IsDelete: true,
      DeleteById: userinfo.umId
    }
    this.api.deleteData('/api/N_RoomMaster/delete', this.selectedroom, 'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop') ?.click();
      this.getAllroom();

    });
  }

  onclickEdit(item: any, key: string) {
    const modalRef = this.modalService.open(RoommangementComponent, { size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.roomDetail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      console.log(receivedEntry);
      this.getAllroom();

      // this.employedetail = receivedEntry;
    })
  }

}
