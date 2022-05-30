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
	roomList2: any = [];
	selectedItems = [];
	dropdownSettings: any;
	categorylist: any;
	items:any;
	selectedcategries:any = [];
	subCategoryDetail:any;
	submitted:boolean = false;
	displayName:any
	selectedTherapyItems:any = []
	selectedTherapyItems1:any = []
	deSelectedTherapyItems:any = []
	tempSelectedTherapyItems:any = []
	overAllPrice = 0
	overDeAllPrice = 0
	temArray:any = []
	people : any = []
	getcategoriesArray: any = []
	selectedDate:any;
	selectedTime:any;
	ngDatevalue:any ={
		year: new Date().getFullYear(), month: new Date().getMonth()+1, day: new Date().getDate()}
	minimumDate:any ={
		year: new Date().getFullYear(), month: new Date().getMonth()+1, day: new Date().getDate()}
	bookingObj:any = {
		location:'',
		roomid:'',
		spaId:''
	}
		
	
	constructor(private modalService: NgbModal, private api: ApiService,private fb : FormBuilder) { 
		this.getcategorylist();
		this.getSubCategories();
		this.getTimeSlot();
		this.getSpa();
		this.getRoom();
		this.getSubcatDetail();
		console.log(this.ngDatevalue)
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
	onKeyUpEvent(event: any){

		this.people = [];

		console.log(event.target.value);
		let n = event.target.value;
		for(let i=1; i<=n; i++){
			this.people.push(i);
			
		}
		console.log(this.people);
	 
	 }
	createItem(data:any): FormGroup {
		return this.fb.group({
		  firstName: data&&data.firstName?data.firstName:'',
		  lastName: data&&data.lastName?data.lastName:'',
		  contactNumber: data&&data.contactNumber?data.contactNumber:'' ,
		  email: [data&& data.email ?data.email:'',[Validators.required, Validators.email]],
		  name : data&&data.name?data.name:'',
		  cateories: [this.selectedTherapyItems1
			,Validators.required],
		  sucategories: [data&&data.sucategories&& data.sucategories?data.sucategories:'',Validators.required],
		  // filename: ['',Validators.required],
		  price: data&&data.price?data.price:'',
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
	// this.appointmentform.reset()

	
	console.log(item);
	this.displayName = getname.Name
	this.selectTherapy({ id: item.Id, name: item.Name },0)
	this.selectedTherapyItems1 = [];
	this.selectedTherapyItems1.push({ id: item.Id, name: item.Name })
	this.appointmentform = this.fb.group({
		// Selectcategories: ["",Validators.required],
		customer: this.fb.array([ ])
	  });	
	  this.addItem({})

	this.modalService.open(content, { size: 'xl' }).result.then((result) => {
		console.log(result);
		
		this.closeResult = `Closed with: ${result}`;
	}, (reason) => {
		this.closeResult = `Dismissed`;
	});
	// this.selectedTherapyItems

}
ChangeSortOrder(no: any) {
	this.slectOne = no
}
selectTherapy(evt: any,i:any) {
	console.log(evt)
	this.selectedTherapyItems.push(evt)
	// this.selectedcategries =[]
	// this.filteredcat = []
	let item:any = []
	let tempcatdata = this.filteredcat[i] ? this.filteredcat[i] : []
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
				
				this.tempSelectedTherapyItems.push({ id: arr.id, name: arr.therapySubcategoryName, price:arr.price })
				tempcatdata.push({ id: arr.id, name: arr.therapySubcategoryName,price:arr.price  })
			
			})
			this.filteredcat[i] = [];
			setTimeout(() => {
				this.filteredcat[i] = tempcatdata
			}, 700);
			console.log('category afeter updates', this.filteredcat[i])
			// console.log(this.filteredcat);
		} else {
			this.api.showNotification('error', 'Failed to fetch data.');
		}
	});
}



deSelectTherapy(evt: any, i:any) {
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
			this.temArray = this.filteredcat[i]
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
				this.filteredcat[i] = this.temArray
				console.log(this.filteredcat, this.temArray);
			}, 700);
		} else {
			this.api.showNotification('error', 'Failed to fetch data.');
		}
	});
}
selectSubTherapy(evt: any, data:any,i:any, ) {
	console.log(this.getcategoriesArray, evt, this.items.value[i]);
	let price = 0;
	this.items[i]
	this.items.value[i].sucategories.map((f:any)=>{
		let index = this.filteredcat[i].findIndex((j:any) => f.id == j.id)
			console.log(this.filteredcat[i][index])
			if(index != -1) {
				price += this.filteredcat[i][index].price
			}
	})
	this.customer.at(i).patchValue({
		price:price
		})		
}
deSelectSubTherapy(evt: any, i:any) {
	let price = 0;
	this.items.value[i].sucategories.map((f:any)=>{
		let index = this.filteredcat[i].findIndex((j:any) => f.id == j.id)
			console.log(this.filteredcat[i][index])
			if(index != -1) {
				price += this.filteredcat[i][index].price
			}
	})
	this.customer.at(i).patchValue({
		price: price
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
getRoom(){
	this.roomList = undefined;
	this.api.fetchData('/api/N_RoomMaster/GetAll',{},'GET').subscribe(res => {
		// console.log(res);
		this.api.loader('stop');
		if(res['status'] == 200) {
		let item = []
		this.roomList = res['result'];
		// this.filteredcat = res['result'];
		}else{
		this.api.showNotification('error', 'Failed to fetch data.');
		}
	});
	}
getSubcatDetail(){
	this.subCategoryDetail = [];
	this.api.fetchData('/api/N_TherapyCategory/GetAllWithSubcategory',{},'GET').subscribe(res => {
		this.api.loader('stop');
		if(res['status'] == 200) {
		let item = []
		let data = JSON.parse(res['result']);
		if( data.length == 1) {
			this.subCategoryDetail = [];
			let keys = Object.keys(data[0])
			if(keys.length > 0) {
				keys.map((f:any) => {
					this.subCategoryDetail.push(data[0][f]);
				}) 
			}
		}
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
	console.log(this.appointmentform.value);
	document.getElementById('closeModel-res')?.click();
	setTimeout(() => {
		console.log('pick a time ')
		document.getElementById('ngb-nav-1')?.click();

	},200)
	}
	onSelectTime(item:any){
		console.log(item)
		this.selectedTime = item
	}	

	onDateSelect(e:any){
		console.log(e);	
		this.selectedDate = new Date(e.year, e.month-1, e.day)
		console.log(this.selectedDate);	
	}
	
	
	modelClose(){
		this.selectedTherapyItems = []
	}

	onSelectSpa(event:any){
	
		this.roomList2 = this.roomList.filter((f:any) => f.spaId == event.target.value)
	}

	bookNow(){

	}
	  
}