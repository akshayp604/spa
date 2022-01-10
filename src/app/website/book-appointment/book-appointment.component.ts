import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ApiService } from '../../services/api.service'
import { FormArray, FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
	selector: 'app-book-appointment',
	templateUrl: './book-appointment.component.html',
	styleUrls: ['./book-appointment.component.scss'],
	  encapsulation:ViewEncapsulation.None
})
export class BookAppointmentComponent implements OnInit {
	eveningarray = [5,6,7,8,9,10,11]
	appointmentform:any;
	sucategories:any
	filteredcat:any = []
	active = 'top';
	closeResult: any;
	slectOne: any = "Please select One"
	dropdownList: any = [];
	dropdownSettings1: any = [];
	subTharapy: any = [];
	spaList: any = [];
	timeList: any = [];
	roomList: any = [];
	selectedItems = [];
	dropdownSettings: any;
	categorylist: any;
	items:any;
	selectedcategries:any = [];
	subCategoryDetail:any;
	submitted:boolean = false;
	displayName:any
	selectedTherapyItems:any = []
	deSelectedTherapyItems:any = []
	tempSelectedTherapyItems:any = []
	overAllPrice = 0
	overDeAllPrice = 0
	temArray:any = []
	getcategoriesArray: any = []
	constructor(private modalService: NgbModal, private api: ApiService,private fb : FormBuilder) { 
		this.getcategorylist();
		this.getSubCategories();
		this.getTimeSlot();
		this.getSpa();
		this.getSubcatDetail();
	}

	ngOnInit(): void {
		this.dropdownSettings = {
			singleSelection: false,
			idField: 'id',
			textField: 'name',
			itemsShowLimit: 3,
			allowSearchFilter: false,
			enableCheckAll: false
		};
		this.dropdownSettings1 = {
			singleSelection: false,
			idField: 'id',
			textField: 'name',
			itemsShowLimit: 3,
			allowSearchFilter: false,
			enableCheckAll: false
		};
	
		this.appointmentform = this.fb.group({
			Selectcategories: ["",Validators.required],
			customer: this.fb.array([  ])
		  });
		  this.addItem({})
	}
	get f() { return this.appointmentform.controls; }
	addItem(data:any={}): void {
		this.items = this.appointmentform.get('customer') as FormArray;
		this.items.push(this.createItem(data));

	  }
	remove(i:any): void {
	this.items = this.appointmentform.get('customer') as FormArray;
	this.items.removeAt(i);
	}
	createItem(data:any): FormGroup {
		return this.fb.group({
		  firstName: data&&data.firstName?data.firstName:'',
		  lastName: data&&data.lastName?data.lastName:'',
		  contactNumber: data&&data.contactNumber?data.contactNumber:'' ,
		  email: [data&& data.email ?data.email:'',[Validators.required, Validators.email]],
		  cateories: [data&&data.cateories?data.cateories:'',Validators.required],
		  sucategories: [data&&data.sucategories&& data.sucategories?data.sucategories:'',Validators.required],
		  // filename: ['',Validators.required],
		  price: [data&&data.price?data.price:'',Validators.required],
		  preference: [data&&data.preference?data.preference:''],
		});
	}

	get customer(){  return this.appointmentform.get('customer') as FormArray }

  pointAt(index:any) {
    let form:any = (<FormArray>this.appointmentform.get('customer')).at(index);
    return form['controls'];
  }
ScrollIntoView(elem: any) {
	document.querySelector(elem).scrollIntoView({ behavior: 'smooth', block: 'start' });
}
open(content: any, getname:any, item:any) {
	console.log(item);
	this.displayName = getname.Name
	this.selectTherapy({ id: item.Id, name: item.Name })
	this.modalService.open(content, { size: 'xl' }).result.then((result) => {
		console.log(result);
		
		this.closeResult = `Closed with: ${result}`;
	}, (reason) => {
		this.closeResult = `Dismissed`;
	});
}
ChangeSortOrder(no: any) {
	this.slectOne = no
}
selectTherapy(evt: any) {
	console.log(evt)
	this.selectedTherapyItems.push(evt)
	// this.selectedcategries =[]
	this.filteredcat = []
	let item:any = []
	this.api.fetchData('/api/N_TherapySubcategory/GetSubcategoryWithDetail', { CategoryId:evt.id}, 'GET').subscribe(res => {
		console.log(res);
		this.api.loader('stop');
		if (res['status'] == 200) {
			item = (res['result']);
			for (let i = 0; i < item.length; i++) {				
				this.getcategoriesArray.push({
					createById: item[i].createById,
					createDate: item[i].createDate,
					deleteById: item[i].deleteById,
					deleteDate: item[i].deleteDate,
					description: item[i].description,
					duration: item[i].duration,
					id: item[i].id,
					isActive: item[i].isActive,
					isDelete: item[i].isDelete,
					modifyById: item[i].modifyById,
					modifyDate: item[i].modifyDate,
					price: item[i].price,
					therapySubcategoryId: item[i].therapySubcategoryId,
					therapySubcategoryName: item[i].therapySubcategoryName,
				})
				
			}
			console.log(this.getcategoriesArray);
			item.map((arr:any) =>{
				
				this.tempSelectedTherapyItems.push({ id: arr.id, name: arr.therapySubcategoryName })
			})			
			this.filteredcat = this.tempSelectedTherapyItems
			console.log(this.filteredcat);
		} else {
			this.api.showNotification('error', 'Failed to fetch data.');
		}
	});
}



deSelectTherapy(evt: any) {
	this.deSelectedTherapyItems = []
	console.log(evt);
	this.api.fetchData('/api/N_TherapySubcategory/GetSubcategoryWithDetail', { CategoryId: evt.id }, 'GET').subscribe(res => {
		console.log(res);
		this.api.loader('stop');
		// let temArray:any = []
		if (res['status'] == 200) {
			let item: any = []
			this.deSelectedTherapyItems = res['result'];
			item = res['result'];
			this.temArray = this.filteredcat
			console.log(this.deSelectedTherapyItems, this.temArray);
			
			for (let i = 0; i < this.temArray.length; i++) {
				for (let j = 0; j < this.deSelectedTherapyItems.length; j++) {
					if (this.temArray[i].id == this.deSelectedTherapyItems[j].id){
						console.log('chck');
						
						this.temArray.splice(i, 1);
					}	
				}
			}
			this.filteredcat = []
			setTimeout(() => {
				this.filteredcat = this.temArray
				console.log(this.filteredcat, this.temArray);
			}, 700);
		} else {
			this.api.showNotification('error', 'Failed to fetch data.');
		}
	});
}
selectSubTherapy(evt: any, data:any,i:any) {
	console.log(this.getcategoriesArray);
	let price = 0;
	this.getcategoriesArray.map((f:any)=>{
		if (f.id == evt.id){
			this.overAllPrice += f.price
		}
	})
	console.log(this.overAllPrice);
	
	// data.map((f:any) => {
	// 	let index = this.sucategories.findIndex((x:any) => x.id == f.name)
	// 	// this.filteredcat = temp.concat(this.filteredcat); 
	// 	if(index != -1) {
	// 		console.log(this.sucategories[index].price )
	// 		price +=  this.sucategories[index].price 
	// 	}
	// });
	this.customer.at(i).patchValue({
		price: this.overAllPrice
		})		
}
deSelectSubTherapy(evt: any, i:any) {
	let price = 0;
	this.getcategoriesArray.map((f: any) => {
		if (f.id == evt.id) {
			this.overAllPrice -= f.price
		}
	})
	this.customer.at(i).patchValue({
		price: this.overAllPrice
	})
}


getcategorylist(){
	this.categorylist = undefined;
	this.api.fetchData('/api/N_TherapyCategory/GetAll',{},'GET').subscribe(res => {
		// console.log(res);
		this.api.loader('stop');
		if(res['status'] == 200) {
		let item = []
		this.categorylist = res['result'];
	

		}else{
		this.api.showNotification('error', 'Failed to fetch data.');
		
		}
	});
	}
getSubCategories(){
	this.selectedcategries = undefined;
	// /api/N_TherapySubcategory/Post
	this.api.fetchData('/api/N_TherapySubcategory/GetAll',{},'GET').subscribe(res => {
		// console.log(res);
		this.api.loader('stop');
		if(res['status'] == 200) {
		let item = []
		this.selectedcategries = res['result'];
		// this.filteredcat = res['result'];
		}else{
		this.api.showNotification('error', 'Failed to fetch data.');
		}
	});
	}
getSpa(){
	this.spaList = undefined;
	this.api.fetchData('/api/N_SpaMaster/GetAll',{},'GET').subscribe(res => {
		// console.log(res);
		this.api.loader('stop');
		if(res['status'] == 200) {
		let item = []
		this.spaList = res['result'];
		// this.filteredcat = res['result'];
		}else{
		this.api.showNotification('error', 'Failed to fetch data.');
		}
	});
	}
getSubcatDetail(){
	this.subCategoryDetail = [];
	// /api/N_TherapySubcategoryDetail/GetAll
	this.api.fetchData('/api/N_TherapyCategory/GetAllWithSubcategory',{},'GET').subscribe(res => {
		this.api.loader('stop');
		if(res['status'] == 200) {
		let item = []
		let data = JSON.parse(res['result']);
		// console.log(data);
		if( data.length == 1) {
			// console.log(data[0]);
			// debugger;
			this.subCategoryDetail = [];
			let keys = Object.keys(data[0])
			if(keys.length > 0) {
				keys.map((f:any) => {
					// data[0][f]
					// console.log(data[0][f])
					// if(data[0][f]['image']){
					// }else{
					// 	data[0][f]['image'] == 'assets/img/services/img-01.jpg'

					// }
					this.subCategoryDetail.push(data[0][f]);
				}) 
			}
			// console.log( this.subCategoryDetail);
			// this.subCategoryDetail = JSON.parse(this.subCategoryDetail);
			// console.log(this.subCategoryDetail)

		}
		// this.filteredcat = res['result'];
		}else{
		this.api.showNotification('error', 'Failed to fetch data.');
		}
	});
	}
getTimeSlot(){
	// this.timeList = undefined;
	this.api.fetchData('/api/N_TimeSlot/GetAll',{},'GET').subscribe(res => {
		// console.log(res);
		this.api.loader('stop');
		if(res['status'] == 200) {
		let item = []
		this.timeList = res['result'];
		this.timeList.map((f:any) => {
			let x = f.timeSlot.indexOf('AM');
			if(x != -1) {
				f['ismoorning'] = true;
			}else{
				let temp =  f.timeSlot.split(':');
				// console.log(temp[0]);
				if(temp[0]) {
					let x  = this.eveningarray.findIndex((j:any)=> j == temp[0])
					if(x != -1)  {
						f['isevening'] = true;
					} else{
						f['afternoon'] = true;

					}

				} else{

					f['isAfternoon'] = true;
				}
			}
		})
		// this.filteredcat = res['result'];
		}else{
		this.api.showNotification('error', 'Failed to fetch data.');
		}
	});
	}

	submitForm(){
	console.log(this.appointmentform.value)
	}
	onSelectTime(item:any){
		console.log(item)
	}	

	onDateSelect(e:any){
console.log(e)	}
	modelClose(){
		this.selectedTherapyItems = []
	}
	  
}
