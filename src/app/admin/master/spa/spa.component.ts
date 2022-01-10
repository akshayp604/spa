import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {SpaManegmentComponent} from './spa-manegment/spa-manegment.component'

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.css']
})
export class SpaComponent implements OnInit {

  spalist:any;
  selectedSpa:any;
  constructor(private api: ApiService, private modalService: NgbModal,) { 
    this.getAllSpa();
  }

  ngOnInit(): void {
  }

  getAllSpa(){
    this.spalist = undefined;
    this.api.fetchData('/api/N_SpaMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
     
        this.spalist = res['result'];
      
        // this.setPagination();

      }else{
        this.api.showNotification('error', 'Failed to fetch data.');
        
      }
    });
  }

  deleteSpa(){
    this.api.loader('start');
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = {
      Id:this.selectedSpa.id,
      IsDelete:true,
      DeleteById:userinfo.umId
    }
    this.api.deleteData('/api/N_SpaMaster/delete',obj,'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop')?.click();
      this.getAllSpa();
    
    });
  }

  onclickEdit(item:any,key:string){
    const modalRef = this.modalService.open(SpaManegmentComponent,  {size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.spaDetail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    console.log(receivedEntry);
    this.getAllSpa();

    // this.employedetail = receivedEntry;
    })
  }

}
