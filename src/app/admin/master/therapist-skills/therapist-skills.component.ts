import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {TherapyskillmanagerComponent} from './therapyskillmanager/therapyskillmanager.component'
@Component({
  selector: 'app-therapist-skills',
  templateUrl: './therapist-skills.component.html',
  styleUrls: ['./therapist-skills.component.css']
})
export class TherapistSkillsComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  subcategory:any = [];
  category:any = [];
  spaList:any = [];
  selected:any;
  therapySkills:any;
  constructor(private api: ApiService, private modalService: NgbModal,) { 
  }

  ngOnInit(): void {
    this.getherapySkills();
  }

  getherapySkills(){
    this.therapySkills = undefined;

    this.api.fetchData('/api/N_TherapistSkills/GetAll',{},'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if(res['status'] == 200) {
        let item = []
        this.therapySkills = res['result'];
   

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
      TSId:this.selected.tsId,
      IsDelete:true,
      DeleteById:userinfo.umId
    }
    this.api.deleteData('/api/N_TherapistSkills/delete',obj,'DELETE').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      document.getElementById('close-pop')?.click();
      this.getherapySkills();
    
    });
  }

  onclick(item:any,key:string){
    const modalRef = this.modalService.open(TherapyskillmanagerComponent,  {size: 'lg', windowClass: 'modal-holder', centered: true });
    console.log(modalRef)
    modalRef.componentInstance.detail = item;
    // modalRef.componentInstance.employeeId = this.employeeId;
    modalRef.componentInstance.flag = key;
    // if(key == 'edit') {
    //   modalRef.componentInstance.index = index;
    // }
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
    console.log(receivedEntry);
    this.getherapySkills();

    // this.employedetail = receivedEntry;
    })
  }
}
