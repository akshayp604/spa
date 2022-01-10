import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
declare var $: any; 
declare var jQuery: any;
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
	@ViewChild('calendar') calendarComponent: FullCalendarComponent | any;
  calendarOptions: CalendarOptions = {
    plugins: [ resourceTimelinePlugin, timeGridPlugin ],
		initialView: 'timeGridWeek',
		dayMaxEvents: true,
		weekends: false,
		selectable: true,
		allDaySlot: false,
		slotDuration: '00:15:00',
		slotLabelInterval:'00:15:00',
		slotMinTime: '09:00:00',
		slotMaxTime: '18:00:00',
		themeSystem:'litera',
    resources: [{
      id: 'a',
      title: 'Room 1'
    }, {
      id: 'b',
      title: 'Room 2',
      eventColor: 'green'
    }, {
      id: 'c',
      title: 'Room 3',
      eventColor: 'orange'
    }, {
      id: 'd',
      title: 'Room 4',
      eventColor: 'red'
    },
    {
      id: 'e',
      title: 'Oceanfront',
      eventColor: 'grey'
    },
    ],
    events: [{
      id: '1',
      resourceId: 'a',
      start: '2018-05-23T09:00:00',
      end: '2018-05-23T14:00:00',
      title: 'event 1'
    }, {
      id: '2',
      resourceId: 'b',
      start: '2018-05-23T09:00:00',
      end: '2018-05-23T14:00:00',
      title: 'event 2'
    }, {
      id: '3',
      resourceId: 'c',
      start: '2018-05-23T13:00:00',
      end: '2018-05-23T14:00:00',
      title: 'event 3'
    }, {
      id: '4',
      resourceId: 'd',
      start: '2018-05-23T09:00:00',
      end: '2018-05-23T09:00:00',
      title: 'event 4'
    }, {
      id: '5',
      resourceId: 'd',
      start: '2018-05-23T09:00:00',
      end: '2018-05-23T09:00:00',
      title: 'event 5'
    }],
		
		// minTime:'09:00:00',
		// validRange: {
		//     start: new Date(), // data atual
		//     end:new Date(this.this.form.value.getFullYear() + 1, this.this.form.value.getMonth(), this.this.form.value.getDate()), // data atual + 14 (15 com a data atual)
		// },
		headerToolbar: {
			// left: 'prev, today, next',
			// center: 'title',
			right: 'prev, today, next, dayGridMonth,timeGridWeek,timeGridDay, listMonth'
		},
		// selectable: true,
		// dateClick: this.handleDateClick.bind(this),
		// eventClick: this.handleEventClick.bind(this),
		// select: this.handleEventSelect.bind(this),
		// dateClick: this.changeCalenderView.bind(this),
		// eventMouseEnter: this.hover.bind(this),
		
		// bind is important!
		// doubleClick: this.handleDateClick.bind(this),
		// events: this.appointment_event, // here you should put your events data and it should be an array

		eventClassNames: function(arg) {
			if (arg.event) {
				console.log('test ',arg.event.extendedProps)
				return [ arg.event.extendedProps.spa ]
			} else {
				return [ '' ]
			}
		},
		// eventDidMount: function(info) {
		// 	var tooltip:any = new Tooltip(info.el, {
		// 	  title: info.event.extendedProps.description,
		// 	  placement: 'top',
		// 	  trigger: 'hover',
		// 	  container: 'body'
		// 	});
		//   },
		
	};
  constructor() { }
  ngAfterViewInit(){ 
    // https://fullcalendar.io/docs/v3/timeline-view
    $('#calendar').fullCalendar({
      defaultView: 'agendaDay',
      defaultDate: '2021-12-11',
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
      resources: [{
        id: 'a',
        title: 'Room 1'
      }, {
        id: 'b',
        title: 'Room 2',
        eventColor: 'green'
      }, {
        id: 'c',
        title: 'Room 3',
        eventColor: 'orange'
      }, {
        id: 'd',
        title: 'Room 4',
        eventColor: 'red'
      },
      {
        id: 'e',
        title: 'Oceanfront',
        eventColor: 'grey'
      },
      ],
      events: [
        {
        id: '1',
        resourceId: 'a',
        start: '2021-12-11T09:00:00',
        end: '2021-12-11T14:00:00',
        title: 'event 1',
        // className:'test1234'
      },
        {
        id: '1',
        resourceId: 'a',
        start: '2018-05-23T09:00:00',
        end: '2018-05-23T14:00:00',
        title: 'event 1',
        // className:'test1234'
      },
        {
        id: '1',
        resourceId: 'a',
        start: '2018-05-23T09:00:00',
        end: '2018-05-23T14:00:00',
        title: 'event 1',
        // className:'test1234'
      }
    ],
  
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

  ngOnInit(): void {
  }

}
