import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationmasterRoutingModule } from './reservationmaster-routing.module';
import { ReservationmasterComponent } from './reservationmaster.component';
import { ReservationManagerComponent } from './reservation-manager/reservation-manager.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ReservationmasterComponent, ReservationManagerComponent],
  imports: [
    CommonModule,
    ReservationmasterRoutingModule
    , FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class ReservationmasterModule { }
