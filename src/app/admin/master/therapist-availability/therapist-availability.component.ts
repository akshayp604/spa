import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AvailabilityComponent } from './availability/availability.component'

import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-therapist-availability',
  templateUrl: './therapist-availability.component.html',
  styleUrls: ['./therapist-availability.component.css']
})

export class TherapistAvailabilityComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  list: any;
  selected: any;
  collection: any = [];
  p = 1;

  constructor(private api: ApiService, private modalService: NgbModal, ) {
    this.getavailabilites();
  }

  ngOnInit(): void {
  }

  getavailabilites() {
    this.list = undefined;
    this.api.fetchData('/api/N_TherapistAvailability/GetAll', {}, 'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if (res['status'] == 200) {
        this.list = res['result'].filter((f: any) => f.empTypeId == 3)
        // this.list = res['result'];
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
      TAId: this.selected.taId,
      IsDelete: true,
      DeleteById: userinfo.umId
    }
    this.api.deleteData('/api/N_TherapistAvailability/delete', obj, 'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop') ?.click();
      this.getavailabilites();

    });
  }

  onclick(item: any, key: string) {
    const modalRef = this.modalService.open(AvailabilityComponent, { size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      console.log(receivedEntry);
      this.getavailabilites();

      // this.employedetail = receivedEntry;
    })
  }

}
