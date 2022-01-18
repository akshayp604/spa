import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationDetailRoutingModule } from './reservation-detail-routing.module';
import { ReservationDetailComponent } from './reservation-detail.component';
// import { ReservationdetailComponentchild } from './reservationdetail/reservationdetail.component';

import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ReservationDetailComponent],
  imports: [
    CommonModule,
    ReservationDetailRoutingModule, FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class ReservationDetailModule { }
