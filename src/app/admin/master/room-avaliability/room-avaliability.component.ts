import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {AvailabilitymanagerComponent} from './availabilitymanager/availabilitymanager.component'
@Component({
  selector: 'app-room-avaliability',
  templateUrl: './room-avaliability.component.html',
  styleUrls: ['./room-avaliability.component.css']
})
export class RoomAvaliabilityComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  list:any;
  selected:any;
  constructor(private api: ApiService, private modalService: NgbModal,) { 
    this.getavailabilites();
  }

  ngOnInit(): void {
  }

  getavailabilites(){
    this.list = undefined;
    this.api.fetchData('/api/N_RoomAvaliability/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        this.list = res['result'];
   

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
      Id:this.selected.id,
      IsDelete:true,
      DeleteById:userinfo.umId
    }
    this.api.deleteData('/api/N_RoomAvaliability/delete',obj,'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop')?.click();
      this.getavailabilites();
    
    });
  }

  onclick(item:any,key:string){
    const modalRef = this.modalService.open(AvailabilitymanagerComponent,  {size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    console.log(receivedEntry);
    this.getavailabilites();

    // this.employedetail = receivedEntry;
    })
  }

}
