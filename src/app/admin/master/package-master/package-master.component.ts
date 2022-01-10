import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {PackagemangerComponent} from './packagemanger/packagemanger.component'
@Component({
  selector: 'app-package-master',
  templateUrl: './package-master.component.html',
  styleUrls: ['./package-master.component.css']
})
export class PackageMasterComponent implements OnInit {

 
  packagList:any;
  selected:any;
  constructor(private api: ApiService, private modalService: NgbModal,) { 
    this.getpackagList();
  }

  ngOnInit(): void {
  }

  getpackagList(){
    this.packagList = undefined;
    this.api.fetchData('/api/N_PackageMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        let item = []
        this.packagList = res['result'];
   

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
      PmId:this.selected.pmId,
      IsDelete:true,
      DeleteById:userinfo.umId
    }
    this.api.deleteData('/api/N_PackageMaster/delete',obj,'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop')?.click();
      this.getpackagList();
    
    });
  }

  onclick(item:any,key:string){
    const modalRef = this.modalService.open(PackagemangerComponent,  {size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    console.log(receivedEntry);
    this.getpackagList();

    // this.employedetail = receivedEntry;
    })
  }

}