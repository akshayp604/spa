import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CountrymanagementComponent } from './countrymanagement/countrymanagement.component'
@Component({
  selector: 'app-countrymaster',
  templateUrl: './countrymaster.component.html',
  styleUrls: ['./countrymaster.component.css']
})
export class CountrymasterComponent implements OnInit {
  countrylist:any;
  selectedcountry:any;
  constructor(private api: ApiService, private modalService: NgbModal,) { 
    this.getcountrylist();
  }

  ngOnInit(): void {
  }

  getcountrylist(){
    this.countrylist = undefined;
    this.api.fetchData('/api/N_CountryMaster/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        let item = []
        this.countrylist = res['result'];
   

      }else{
        this.api.showNotification('error', 'Failed to fetch data.');
        
      }
    });
  }

  deletecountry(){
    this.api.loader('start');
    let data:any =this.api.getAuthDetail()
    let userinfo =  JSON.parse(data.user);
    let obj = {
      Id:this.selectedcountry.id,
      IsDelete:true,
      DeleteById:userinfo.umId
    }
    this.api.deleteData('/api/N_CountryMaster/delete',obj,'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop')?.click();
      this.getcountrylist();
    
    });
  }

  onclickcountry(item:any,key:string){
    const modalRef = this.modalService.open(CountrymanagementComponent,  {size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.countryDetail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    console.log(receivedEntry);
    this.getcountrylist();

    // this.employedetail = receivedEntry;
    })
  }
}
