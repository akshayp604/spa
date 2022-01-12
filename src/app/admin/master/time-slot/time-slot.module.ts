import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeSlotRoutingModule } from './time-slot-routing.module';
import { TimeSlotComponent } from './time-slot.component';
import { TimeSlotmanagerComponent } from './time-slotmanager/time-slotmanager.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { NgxPaginationModule } from 'ngx-pagination';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TimeSlotComponent, TimeSlotmanagerComponent],
  imports: [
    CommonModule,
    TimeSlotRoutingModule,
    NgxPaginationModule,
    FormsModule, ReactiveFormsModule,
    NgbModule
  ]
})
export class TimeSlotModule { }
