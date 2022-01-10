import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TherapiestmanagerComponent} from './therapiestmanager/therapiestmanager.component'
@Component({
  selector: 'app-therapist-master',
  templateUrl: './therapist-master.component.html',
  styleUrls: ['./therapist-master.component.css']
})
export class TherapistMasterComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  therapiList:any;
  selected:any;
  constructor(private api: ApiService, private modalService: NgbModal,) { 
    this.gettherapiList();
  }

  ngOnInit(): void {
  }

  gettherapiList(){
    this.therapiList = undefined;
    this.api.fetchData('/api/N_TherapistMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        let item = []
        this.therapiList = res['result'];
   

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
      TMId:this.selected.tmId,
      IsDelete:true,
      DeleteById:userinfo.umId
    }
    this.api.deleteData('/api/N_TherapistMaster/delete',obj,'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop')?.click();
      this.gettherapiList();
    
    });
  }

  onclick(item:any,key:string){
    const modalRef = this.modalService.open(TherapiestmanagerComponent,  {size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    console.log(receivedEntry);
    this.gettherapiList();

    // this.employedetail = receivedEntry;
    })
  }

}
