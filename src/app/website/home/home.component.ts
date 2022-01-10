import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ApiService } from '../../services/api.service'
import { FormArray, FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subCategoryDetail:any
	constructor(private modalService: NgbModal, private api: ApiService,private fb : FormBuilder) { 
    this.getSubcatDetail();
  }

  ngOnInit(): void {
    this.getSubcatDetail()
  }

  getSubcatDetail(){
    this.subCategoryDetail = [];
    // /api/N_TherapySubcategoryDetail/GetAll
    this.api.fetchData('/api/N_TherapyCategory/GetAllWithSubcategory',{},'GET').subscribe(res => {
      this.api.loader('stop');
      if(res['status'] == 200) {
      let item = []
      let data = JSON.parse(res['result']);
      console.log(data.length);
      if( data.length == 1) {
        // console.log(data[0]);
        // debugger;
        this.subCategoryDetail = [];
        let keys = Object.keys(data[0])
        if(keys.length > 0) {
          keys.map((f:any) => {
            // data[0][f]
            console.log(data[0][f])
            // if(data[0][f]['image']){
            // }else{
            // 	data[0][f]['image'] == 'assets/img/services/img-01.jpg'
  
            // }
            this.subCategoryDetail.push(data[0][f]);
          }) 
        }
        console.log( this.subCategoryDetail);
        // this.subCategoryDetail = JSON.parse(this.subCategoryDetail);
        // console.log(this.subCategoryDetail)
  
      }
      // this.filteredcat = res['result'];
      }else{
      this.api.showNotification('error', 'Failed to fetch data.');
      }
    });
    }

}
