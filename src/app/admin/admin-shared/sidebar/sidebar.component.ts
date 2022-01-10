import { Component, OnInit } from '@angular/core';
declare var $: any; 
declare var jQuery: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  masterToggel:any = false;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){ 
    (function($) {
      "use strict"; // Start of use strict
    
      // Toggle the side navigation
      $("#sidebarToggle, #sidebarToggleTop").on('click', function(e:any) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
          $('.sidebar .collapse').collapse('hide');
        };
      });
    
      // Close any open menu accordions when window is resized below 768px
      $(window).resize(function() {
        if ($(window).width() < 768) {
          $('.sidebar .collapse').collapse('hide');
        };
        
        // Toggle the side navigation when window is resized below 480px
        if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
          $("body").addClass("sidebar-toggled");
          $(".sidebar").addClass("toggled");
          $('.sidebar .collapse').collapse('hide');
        };
      });
    
      // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
      $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e:any) {
        if ($(window).width() > 768) {
          var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
          // this.scrollTop += (delta < 0 ? 1 : -1) * 30;
          e.preventDefault();
        }
      });
    
      // Scroll to top button appear
      $(document).on('scroll', function() {
        var scrollDistance = $().scrollTop();
        if (scrollDistance > 100) {
          $('.scroll-to-top').fadeIn();
        } else {
          $('.scroll-to-top').fadeOut();
        }
      });
    
      // Smooth scrolling using jQuery easing
      $(document).on('click', 'a.scroll-to-top', function(e:any) {
        var $anchor = $();
        $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        e.preventDefault();
      });
      /*calender*/
     $(document).ready(function() {
    
                //for left button
                // $(document).on('click', '.angle_left_btn', function(event:any) { 
                //     event.preventDefault(); 
                //     $(".fc-prev-button").click(); 
                // });
                
                // //for right button
                // $(document).on('click', '.angle_right_btn', function(event:any) { 
                //     event.preventDefault(); 
                //     $(".fc-next-button").click(); 
                // }); 
                
                //dropdown month
                // jQuery("select.custom_select_bx").change(function (event:any) {
                //    event.preventDefault(); 
                //    var valis = jQuery(this).val();
                //     if(valis == 'month_is'){
                //      $(".fc-month-button").click(); 
                //     }
                // }); 
                
                 //dropdown week
                // jQuery("select.custom_select_bx").change(function (event:any) {
                //    event.preventDefault(); 
                //    var valis = jQuery(this).val();
                //     if(valis == 'week_is'){
                //      $(".fc-agendaWeek-button").click(); 
                //     }
                // }); 
                
                 //dropdown day
                // jQuery("select.custom_select_bx").change(function (event:any) {
                //    event.preventDefault(); 
                //    var valis = jQuery(this).val();
                //     if(valis == 'day_is'){
                //      $(".fc-agendaDay-button").click(); 
                //     }
                // }); 
             });
    })(jQuery); // End of use strict
  }

}
