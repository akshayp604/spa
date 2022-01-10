import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DiscountMangementComponent } from './discount-mangement/discount-mangement.component'
@Component({
  selector: 'app-discountmatser',
  templateUrl: './discountmatser.component.html',
  styleUrls: ['./discountmatser.component.css']
})
export class DiscountmatserComponent implements OnInit {

  discountlist:any;
  selecteddiscount:any;
  constructor(private api: ApiService, private modalService: NgbModal,) { 
    this.getdiscountlist();
  }

  ngOnInit(): void {
  }

  getdiscountlist(){
    this.discountlist = undefined;
    this.api.fetchData('/api/N_DiscountMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        let item = []
        this.discountlist = res['result'];
   

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
      DId:this.selecteddiscount.dId,
      IsDelete:true,
      DeleteById:userinfo.umId
    }
    this.api.deleteData('/api/N_DiscountMaster/delete',obj,'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop')?.click();
      this.getdiscountlist();
    
    });
  }

  onclick(item:any,key:string){
    const modalRef = this.modalService.open(DiscountMangementComponent,  {size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    console.log(receivedEntry);
    this.getdiscountlist();

    // this.employedetail = receivedEntry;
    })
  }


}
