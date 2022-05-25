import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

// https://mattlewis92.github.io/angular-calendar/#/day-view-scheduler
declare var $: any; 
declare var jQuery: any;
import * as moment from 'moment';
import {ApiService} from '../../services/api.service'

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
	@ViewChild('calendar') calendarComponent: FullCalendarComponent | any;
  today:any= new Date()
 showDate:any = moment().format('MMM D, YYYY');
 roomlist:any;
 reservationList:any;
  // calendarOptions: CalendarOptions = {
  //   plugins: [ resourceTimelinePlugin, timeGridPlugin ],
	// 	initialView: 'timeGridWeek',
	// 	dayMaxEvents: true,
	// 	weekends: false,
	// 	selectable: true,
	// 	allDaySlot: false,
	// 	slotDuration: '00:15:00',
	// 	slotLabelInterval:'00:15:00',
	// 	slotMinTime: '09:00:00',
	// 	slotMaxTime: '18:00:00',
	// 	themeSystem:'litera',
  //   resources: [{
  //     id: 'a',
  //     title: 'Room 1'
  //   }, {
  //     id: 'b',
  //     title: 'Room 2',
  //     eventColor: 'green'
  //   }, {
  //     id: 'c',
  //     title: 'Room 3',
  //     eventColor: 'orange'
  //   }, {
  //     id: 'd',
  //     title: 'Room 4',
  //     eventColor: 'red'
  //   },
  //   {
  //     id: 'e',
  //     title: 'Oceanfront',
  //     eventColor: 'grey'
  //   },
  //   ],
  //   events: [{
  //     id: '1',
  //     resourceId: 'a',
  //     start: '2018-05-23T09:00:00',
  //     end: '2018-05-23T14:00:00',
  //     title: 'event 1'
  //   }, {
  //     id: '2',
  //     resourceId: 'b',
  //     start: '2018-05-23T09:00:00',
  //     end: '2018-05-23T14:00:00',
  //     title: 'event 2'
  //   }, {
  //     id: '3',
  //     resourceId: 'c',
  //     start: '2018-05-23T13:00:00',
  //     end: '2018-05-23T14:00:00',
  //     title: 'event 3'
  //   }, {
  //     id: '4',
  //     resourceId: 'd',
  //     start: '2018-05-23T09:00:00',
  //     end: '2018-05-23T09:00:00',
  //     title: 'event 4'
  //   }, {
  //     id: '5',
  //     resourceId: 'd',
  //     start: '2018-05-23T09:00:00',
  //     end: '2018-05-23T09:00:00',
  //     title: 'event 5'
  //   }],
		
	// 	// minTime:'09:00:00',
	// 	// validRange: {
	// 	//     start: new Date(), // data atual
	// 	//     end:new Date(this.this.form.value.getFullYear() + 1, this.this.form.value.getMonth(), this.this.form.value.getDate()), // data atual + 14 (15 com a data atual)
	// 	// },
	// 	headerToolbar: {
	// 		// left: 'prev, today, next',
	// 		// center: 'title',
	// 		right: 'prev, today, next, dayGridMonth,timeGridWeek,timeGridDay, listMonth'
	// 	},
	// 	// selectable: true,
	// 	// dateClick: this.handleDateClick.bind(this),
	// 	// eventClick: this.handleEventClick.bind(this),
	// 	// select: this.handleEventSelect.bind(this),
	// 	// dateClick: this.changeCalenderView.bind(this),
	// 	// eventMouseEnter: this.hover.bind(this),
		
	// 	// bind is important!
	// 	// doubleClick: this.handleDateClick.bind(this),
	// 	// events: this.appointment_event, // here you should put your events data and it should be an array

	// 	eventClassNames: function(arg) {
	// 		if (arg.event) {
	// 			console.log('test ',arg.event.extendedProps)
	// 			return [ arg.event.extendedProps.spa ]
	// 		} else {
	// 			return [ '' ]
	// 		}
	// 	},
	// 	// eventDidMount: function(info) {
	// 	// 	var tooltip:any = new Tooltip(info.el, {
	// 	// 	  title: info.event.extendedProps.description,
	// 	// 	  placement: 'top',
	// 	// 	  trigger: 'hover',
	// 	// 	  container: 'body'
	// 	// 	});
	// 	//   },
		
	// };
  constructor(private api: ApiService) { }
  ngAfterViewInit(){ 
    // https://fullcalendar.io/docs/v3/timeline-view
 
  }

  ngOnInit(): void {
    this.getAllroom();
  }

  getAllroom() {
    this.roomlist = undefined;
    this.api.fetchData('/api/N_RoomMaster/GetAll', {}, 'GET').subscribe(res => {
      this.api.loader('stop');
      if (res['status'] == 200) {
        
        this.roomlist = res['result'].map((f:any, i:any)=> {
          f['id'] = f.rmId;
          f['title'] = f.roomName;
          return f;
        });
        // console.log(this.roomlist);
        this.getreservationlist()
        // this.setPagination();

      } else {
        this.api.showNotification('error', 'Failed to fetch room.');

      }
    });
  }
  getreservationlist() {
    this.reservationList = undefined;
    this.api.fetchData('/api/N_ReservationDetail/GetAll', {}, 'GET').subscribe(res => {
      console.log(res);
      this.api.loader('stop');
      if (res['status'] == 200) {
        this.reservationList = res['result'].map((f:any,i:any) => {
          f['resourceId']= f.rmId;
          f['start']= i==0 ? "2022-03-01T08:00:00":f.startTime;
          f['end']= i==0 ? "2022-03-01T09:00:00":f.endTime;
          f['className']= ['red123', 'fgfdad'] ;
          f['title']= "test";
          f['extend']= {'HTML':"<p>test123 </p><br>"+f.bookedByName +"<br> <p> test </p>"};
          return f;
        });
        console.log(this.reservationList)
        this.showCalender();


      } else {
        this.api.showNotification('error', 'Failed to fetch data.');

      }
    });
  }

  onClickToday(){
    let date = $('#calendar').fullCalendar('today');
    // console.log(moment(date).format('YYYY-MM-DD'))

   this.changeDate();
   
  }
  preview(){
    let date = $('#calendar').fullCalendar('prev');
    this.changeDate();
    // console.log(moment(date).format('YYYY-MM-DD'))
    
    
    
  }
  next(){
    let date = $('#calendar').fullCalendar('next');
    this.changeDate();

  }
  changeDate(){
    console.log($('#calendar').fullCalendar('getDate'));
   let showDate = $('#calendar').fullCalendar('getDate')
   this.showDate = moment(showDate).format('MMM D, YYYY')
  }

  onchanageView(e:any){
    let value = e.target.value;
    if(value == 'month_is'){
           $(".fc-month-button").click(); 
    }
    if(value == 'week_is'){
           $(".fc-agendaWeek-button").click(); 
    }
    if(value == 'day_is'){
           $(".fc-agendaDay-button").click(); 
    }
  }

  showCalender(){
    
    $('#calendar').fullCalendar({
      defaultView: 'agendaDay',
      // defaultDate: moment().format('YYYY-MM-DD'),
      // defaultDate: '2018-05-23',
      editable: true,
      selectable: true,
      eventLimit: true, // allow "more" link when too many events
      header: {
        left: 'prev,next today',
        right: 'month,agendaWeek,agendaDay'
      },
  
      //// uncomment this line to hide the all-day slot
      allDaySlot: false,
      resources: this.roomlist,
      // resources: [{
      //   id: 'a',
      //   title: 'Room 1'
      // }, {
      //   id: 'b',
      //   title: 'Room 2',
      //   eventColor: 'green'
      // }, {
      //   id: 'c',
      //   title: 'Room 3',
      //   eventColor: 'orange'
      // }, {
      //   id: 'd',
      //   title: 'Room 4',
      //   eventColor: 'red'
      // },
      // {
      //   id: 'e',
      //   title: 'Oceanfront',
      //   eventColor: 'grey'
      // },
      // ],
    //   events: [
    //     {
    //     id: '1',
    //     resourceId: '1',
    //     start: '2022-01-20T09:00:00',
    //     end: '2022-01-20T14:00:00',
    //     title: 'event 1',
    //     // className:'test1234'
    //   },
    //     {
    //     id: '1',
    //     resourceId: 'a',
    //     start: '2018-05-23T09:00:00',
    //     end: '2018-05-23T14:00:00',
    //     title: 'event 1',
    //     // className:'test1234'
    //   },
    //     {
    //     id: '1',
    //     resourceId: 'a',
    //     start: '2018-05-23T09:00:00',
    //     end: '2018-05-23T14:00:00',
    //     title: 'event 1',
    //     // className:'test1234'
    //   }
    // ],
      events:this.reservationList,
      eventRender: function(event:any, element:any) {
        // if(event.icon){          
           element.find(".fc-title").prepend("<p>test runn <br> 123 </p>>");
        // }
     } ,
      select: function(start:any, end:any, jsEvent:any, view:any, resource:any) {
        console.log(
          'select',
          start.format(),
          end.format(),
          resource ? resource.id : '(no resource)'
        );
      },
      dayClick: function(date:any, jsEvent:any, view:any, resource:any) {
        console.log(
          'dayClick',
          date.format(),
          resource ? resource.id : '(no resource)'
        );
      }
    },);
  }
}