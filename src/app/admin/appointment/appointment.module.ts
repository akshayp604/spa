import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';
import {FullCalendarModule} from '@fullcalendar/angular';


@NgModule({
  declarations: [AppointmentComponent],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    FullCalendarModule
  ]
})
export class AppointmentModule { }
