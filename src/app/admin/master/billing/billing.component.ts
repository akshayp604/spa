import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {BillingManagementComponent} from './billing-management/billing-management.component'
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  billingList:any;
  selectedbill:any;
  constructor(private api: ApiService, private modalService: NgbModal,) { 
    this.getAllbilinglist();
  }

  ngOnInit(): void {
  }

  getAllbilinglist(){
    this.billingList = undefined;
    this.api.fetchData('/api/N_BillingStatus/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
       
        this.billingList = res['result'];


      }else{
        this.api.showNotification('error', 'Failed to fetch biilinglist.');
        
      }
    });
  }

  deleteBill(){
    this.api.loader('start'); 
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = {
      Id:this.selectedbill.id,
      IsDelete:true,
      DeleteById:userinfo.umId
    }
    this.api.deleteData('/api/N_BillingStatus/delete',obj,'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop')?.click();
      this.getAllbilinglist();
    
    });
  }

  onclickbilling(item:any,key:string){
    const modalRef = this.modalService.open(BillingManagementComponent,  {size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.billDetail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    console.log(receivedEntry);
    this.getAllbilinglist();

    // this.employedetail = receivedEntry;
    })
  }

}
