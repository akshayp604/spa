import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationmasterRoutingModule } from './reservationmaster-routing.module';
import { ReservationmasterComponent } from './reservationmaster.component';
import { ReservationManagerComponent } from './reservation-manager/reservation-manager.component';
 
 import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ReservationmasterComponent, ReservationManagerComponent],
  imports: [
    CommonModule,
    ReservationmasterRoutingModule
    ,FormsModule,ReactiveFormsModule,
    NgbModule
  ]
})
export class ReservationmasterModule { }
