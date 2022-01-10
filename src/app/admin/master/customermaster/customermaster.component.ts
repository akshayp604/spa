import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerManagmentComponent } from './customer-managment/customer-managment.component'
@Component({
  selector: 'app-customermaster',
  templateUrl: './customermaster.component.html',
  styleUrls: ['./customermaster.component.css']
})
export class CustomermasterComponent implements OnInit {
  customerList:any;
  selectedCustomer:any;
  constructor(private api: ApiService, private modalService: NgbModal,) { 
    this.getcustomerList();
  }

  ngOnInit(): void {
  }

  getcustomerList(){
    this.customerList = undefined;
    this.api.fetchData('/api/N_CustomerMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        let item = []
        this.customerList = res['result'];
   

      }else{
        this.api.showNotification('error', 'Failed to fetch data.');
        
      }
    });
  }

  deletecustomer(){
    this.api.loader('start');
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = {
      CMId:this.selectedCustomer.cmId,
      IsDelete:true,
      DeleteById:userinfo.umId
    }
    this.api.deleteData('/api/N_CustomerMaster/delete',obj,'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop')?.click();
      this.getcustomerList();
    
    });
  }

  onclick(item:any,key:string){
    const modalRef = this.modalService.open(CustomerManagmentComponent,  {size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    console.log(receivedEntry);
    this.getcustomerList();

    // this.employedetail = receivedEntry;
    })
  }

}
