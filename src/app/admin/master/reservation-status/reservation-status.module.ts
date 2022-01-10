import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationStatusRoutingModule } from './reservation-status-routing.module';
import { ReservationStatusComponent } from './reservation-status.component';
import { StatusmanagerComponent } from './statusmanager/statusmanager.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ReservationStatusComponent, StatusmanagerComponent],
  imports: [
    CommonModule,
    ReservationStatusRoutingModule,FormsModule,ReactiveFormsModule,
    NgbModule

  ]
})
export class ReservationStatusModule { }




