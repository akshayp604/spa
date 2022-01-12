import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StatemanagerComponent } from './statemanager/statemanager.component'

import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-state-master',
  templateUrl: './state-master.component.html',
  styleUrls: ['./state-master.component.css']
})
export class StateMasterComponent implements OnInit {

  stateList: any;
  selected: any;
  collection: any = [];
  p = 1;

  constructor(private api: ApiService, private modalService: NgbModal, ) {
    this.getstateList();
  }

  ngOnInit(): void {
  }

  getstateList() {
    this.stateList = undefined;
    this.api.fetchData('/api/N_StateMaster/GetAll', {}, 'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if (res['status'] == 200) {
        let item = []
        this.stateList = res['result'];


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
    this.api.deleteData('/api/N_StateMaster/delete', obj, 'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop') ?.click();
      this.getstateList();

    });
  }

  onclick(item: any, key: string) {
    const modalRef = this.modalService.open(StatemanagerComponent, { size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      console.log(receivedEntry);
      this.getstateList();

      // this.employedetail = receivedEntry;
    })
  }

}
