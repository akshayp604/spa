import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TherapysubcatmanagerComponent } from './therapysubcatmanager/therapysubcatmanager.component'
@Component({
  selector: 'app-therapy-sub-category-detail',
  templateUrl: './therapy-sub-category-detail.component.html',
  styleUrls: ['./therapy-sub-category-detail.component.css']
})
export class TherapySubCategoryDetailComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  categorylist:any;
  category:any = [];
  selected:any;
  constructor(private api: ApiService, private modalService: NgbModal,) { 
    this.getcategorylist();
  }

  ngOnInit(): void {
  }

  getcategorylist(){
    this.categorylist = undefined;
    this.api.fetchData('/api/N_TherapySubcategoryDetail/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        let item = []
        this.categorylist = res['result'];
   

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
    this.api.deleteData('/api/N_TherapySubcategoryDetail/delete',obj,'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop')?.click();
      this.getcategorylist();
    
    });
  }

  onclick(item:any,key:string){
    const modalRef = this.modalService.open(TherapysubcatmanagerComponent,  {size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    console.log(receivedEntry);
    this.getcategorylist();

    // this.employedetail = receivedEntry;
    })
  }

}
