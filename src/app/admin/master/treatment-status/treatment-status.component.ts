import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StatusmanagerComponent } from './statusmanager/statusmanager.component'
@Component({
  selector: 'app-treatment-status',
  templateUrl: './treatment-status.component.html',
  styleUrls: ['./treatment-status.component.css']
})
export class TreatmentStatusComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  statusList:any;
  selected:any;
  constructor(private api: ApiService, private modalService: NgbModal,) { 
    this.getpackagelist();
  }

  ngOnInit(): void {
  }

  getpackagelist(){
    this.statusList = undefined;
    this.api.fetchData('/api/N_TreatmentStatus/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        this.statusList = res['result'];
   

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
    this.api.deleteData('/api/N_TreatmentStatus/delete',obj,'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop')?.click();
      this.getpackagelist();
    
    });
  }

  onclick(item:any,key:string){
    const modalRef = this.modalService.open(StatusmanagerComponent,  {size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    console.log(receivedEntry);
    this.getpackagelist();

    // this.employedetail = receivedEntry;
    })
  }

}
