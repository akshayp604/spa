import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookAppointmentRoutingModule } from './book-appointment-routing.module';
import { BookAppointmentComponent } from './book-appointment.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BookAppointmentComponent],
  imports: [
    CommonModule,
    BookAppointmentRoutingModule,
    NgbModule,
    NgMultiSelectDropDownModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class BookAppointmentModule { }
