import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservationManagerComponent } from './reservation-manager/reservation-manager.component';

@Component({
  selector: 'app-reservationmaster',
  templateUrl: './reservationmaster.component.html',
  styleUrls: ['./reservationmaster.component.css']
})
export class ReservationmasterComponent implements OnInit {

  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  list:any;
  selected:any;
  constructor(private api: ApiService, private modalService: NgbModal,) { 
    this.getlist();
  }

  ngOnInit(): void {
  }

  getlist(){
    this.list = undefined;
    this.api.fetchData('/api/N_Reservationmaster/GetAll',{},'GET').subscribe(res => {
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
    this.api.deleteData('/api/N_Reservationmaster/delete',obj,'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop')?.click();
      this.getlist();
    
    });
  }

  onclick(item:any,key:string){
    const modalRef = this.modalService.open(ReservationManagerComponent,  {size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    console.log(receivedEntry);
    this.getlist();

    // this.employedetail = receivedEntry;
    })
  }
}
