import { Component, OnInit } from '@angular/core';
declare var $: any; 
declare var jQuery: any;

// working calender code

// $('#calendar').fullCalendar({
//   // defaultView: 'timelineDay',
//   defaultView: 'timelineMonth',
//   defaultDate: '2021-12-11',
//   // defaultDate: '2018-05-23',
//   editable: true,
//   selectable: true,
//   eventLimit: true, // allow "more" link when too many events
//   resourceLabelText: 'therepy',
//   // slotDuration:"0:60",
//   header: {
//     left: 'prev,next today',
//     right: 'month,agendaWeek,agendaDay'
//   },

//   //// uncomment this line to hide the all-day slot
//   allDaySlot: false,
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
//   events: [
//     {
//     id: '1',
//     resourceId: 'a',
//     start: '2021-12-11T09:00:00',
//     end: '2021-12-11T14:00:00',
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

//   select: function(start:any, end:any, jsEvent:any, view:any, resource:any) {
//     console.log(
//       'select',
//       start.format(),
//       end.format(),
//       resource ? resource.id : '(no resource)'
//     );
//   },
//   dayClick: function(date:any, jsEvent:any, view:any, resource:any) {
//     console.log(
//       'dayClick',
//       date.format(),
//       resource ? resource.id : '(no resource)'
//     );
//   }
// },);


@Component({
  selector: 'app-therepist',
  templateUrl: './therepist.component.html',
  styleUrls: ['./therepist.component.css']
})
export class TherepistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){ 
    setTimeout(()=>{
      console.log('runnn')
      $(function() { // document ready

        $('#calendar').fullCalendar({
          // defaultView: 'timelineDay',
          defaultView: 'timelineMonth',
          defaultDate: '2021-12-11',
          // defaultDate: '2018-05-23',
          editable: true,
          selectable: true,
          eventLimit: true, // allow "more" link when too many events
          resourceLabelText: 'therepy',
          // slotDuration:"0:60",
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
        $('#calendar1').fullCalendar({
          // defaultView: 'timelineDay',
          defaultView: 'timelineTenDay',
          views: {
           
            timelineTenDay: {
              type: 'timeline',
              duration: { days: 7 }
            }
          },
          // defaultDate: '2018-05-23',
          editable: true,
          selectable: true,
          eventLimit: true, // allow "more" link when too many events
          resourceLabelText: 'therepy',
          slotDuration:"24:00",
          header: {
            left: 'prev,next today',
            right: 'month,agendaWeek,agendaDay'
          },
      
          //// uncomment this line to hide the all-day slot
          // allDaySlot: false,
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
        
        // $('#calendar1').fullCalendar({
        //   // defaultView: 'timelineDay',
        //   defaultView: 'timelineTenDay',
        //   views: {
           
        //     timelineTenDay: {
        //       type: 'timeline',
        //       duration: { days: 7 }
        //     }
        //   },
        //   // defaultDate: '2021-12-11',
        //   // defaultDate: '2018-05-23',
        //   editable: true,
        //   selectable: true,
        //   eventLimit: true, // allow "more" link when too many events
        //   resourceLabelText: 'therepy',
        //   // slotDuration:"0:60",
        //   header: {
        //     left: 'prev,next today',
        //     right: 'month,agendaWeek,agendaDay'
        //   },
      
        //   //// uncomment this line to hide the all-day slot
        //   allDaySlot: false,
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
        //   events: [
        //     {
        //     id: '1',
        //     resourceId: 'a',
        //     start: '2021-12-11T09:00:00',
        //     end: '2021-12-11T14:00:00',
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
      
        //   select: function(start:any, end:any, jsEvent:any, view:any, resource:any) {
        //     console.log(
        //       'select',
        //       start.format(),
        //       end.format(),
        //       resource ? resource.id : '(no resource)'
        //     );
        //   },
        //   dayClick: function(date:any, jsEvent:any, view:any, resource:any) {
        //     console.log(
        //       'dayClick',
        //       date.format(),
        //       resource ? resource.id : '(no resource)'
        //     );
        //   }
        // },);
      
      });
    },2000)
 
    $(document).ready(function() {

      //for left button
      $(document).on('click', '.angle_left_btn', function(event:any) { 
          event.preventDefault(); 
          $(".fc-prev-button").click(); 
      });
      
      //for right button
      $(document).on('click', '.angle_right_btn', function(event:any) { 
          event.preventDefault(); 
          $(".fc-next-button").click(); 
      }); 
      
      //dropdown month
      jQuery("select.custom_select_bx").change( (event:any) => {
         event.preventDefault(); 
         var valis = jQuery().val();
          if(valis == 'month_is'){
           $(".fc-month-button").click(); 
          }
      }); 
      
       //dropdown week
      jQuery("select.custom_select_bx").change( (event:any) => {
         event.preventDefault 
         var valis = jQuery().val();
          if(valis == 'week_is'){
           $(".fc-agendaWeek-button").click(); 
          }
      }); 
      
       //dropdown day
      jQuery("select.custom_select_bx").change( (event:any) => {
         event.preventDefault(); 
         var valis = jQuery().val();
          if(valis == 'day_is'){
           $(".fc-agendaDay-button").click(); 
          }
      }); 
   });
  }

}
