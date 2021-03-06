import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TherapistAvailabilityRoutingModule } from './therapist-availability-routing.module';
import { TherapistAvailabilityComponent } from './therapist-availability.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvailabilityComponent } from './availability/availability.component';

@NgModule({
  declarations: [TherapistAvailabilityComponent, AvailabilityComponent],
  imports: [
    CommonModule,
    TherapistAvailabilityRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class TherapistAvailabilityModule { }
