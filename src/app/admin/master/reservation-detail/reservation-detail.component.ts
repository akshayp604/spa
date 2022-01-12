import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { ReservationdetailComponentchild } from './reservationdetail/reservation-detail.component'

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {
@Output() passEntry: EventEmitter<any> = new EventEmitter();
  list:any;
  selected:any;
  constructor(private api: ApiService, private modalService: NgbModal,) { 
    this.detlist();
  }

  ngOnInit(): void {
  }

  detlist(){
    this.list = undefined;
    this.api.fetchData('/api/N_ReservationDetail/GetAll',{},'GET').subscribe(res => {
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
      RDId:this.selected.rdId,
      IsDelete:true,
      DeleteById:userinfo.umId
    }
    this.api.deleteData('/api/N_ReservationDetail/delete',obj,'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop')?.click();
      this.detlist();
    
    });
  }

  onclick(item:any,key:string){
   // const modalRef = this.modalService.open(ReservationdetailComponentchild,  {size: 'lg', windowClass: //'modal-holder', centered: true });
   // console.log(modalRef)
   // modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
   // modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
   // modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
   // console.log(receivedEntry);
   // this.detlist();

    // this.employedetail = receivedEntry;
    //})
  }
}

