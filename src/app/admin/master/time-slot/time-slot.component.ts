import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TimeSlotmanagerComponent } from './time-slotmanager/time-slotmanager.component'

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  timeSlot: any;
  category: any = [];
  selected: any;
  collection: any = [];
  p = 1;

  constructor(private api: ApiService, private modalService: NgbModal, ) {

    this.getTimeSlotList();
  }

  ngOnInit(): void {
  }

  getTimeSlotList() {
    this.timeSlot = undefined;
    this.api.fetchData('/api/N_TimeSlot/GetAll', {}, 'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if (res['status'] == 200) {
        let item = []
        this.timeSlot = res['result'];


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
    this.api.deleteData('/api/N_TimeSlot/delete', obj, 'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop') ?.click();
      this.getTimeSlotList();

    });
  }

  onclick(item: any, key: string) {
    const modalRef = this.modalService.open(TimeSlotmanagerComponent, { size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      console.log(receivedEntry);
      this.getTimeSlotList();

      // this.employedetail = receivedEntry;
    })
  }
}
