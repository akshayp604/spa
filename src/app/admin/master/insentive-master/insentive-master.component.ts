import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {InsentivManagerComponent} from './insentiv-manager/insentiv-manager.component'

@Component({
  selector: 'app-insentive-master',
  templateUrl: './insentive-master.component.html',
  styleUrls: ['./insentive-master.component.css']
})
export class InsentiveMasterComponent implements OnInit {

 
  insentivelist:any;
  selected:any;
  constructor(private api: ApiService, private modalService: NgbModal,) { 
    this.getinsentivelist();
  }

  ngOnInit(): void {
  }

  getinsentivelist(){
    this.insentivelist = undefined;
    this.api.fetchData('/api/N_InsentiveMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        let item = []
        this.insentivelist = res['result'];
   

      }else{
        this.api.showNotification('error', 'Failed to fetch insentive.');
        
      }
    });
  }

  delete(){
    this.api.loader('start');
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = {
      id:this.selected.id,
      IsDelete:true,
      DeleteById:userinfo.umId
    }
    this.api.deleteData('/api/N_InsentiveMaster/delete',obj,'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop')?.click();
      this.getinsentivelist();
    
    });
  }

  onclick(item:any,key:string){
    const modalRef = this.modalService.open(InsentivManagerComponent,  {size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    console.log(receivedEntry);
    this.getinsentivelist();

    // this.employedetail = receivedEntry;
    })
  }

}
