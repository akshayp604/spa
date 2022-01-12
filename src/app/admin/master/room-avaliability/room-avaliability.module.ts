import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomAvaliabilityRoutingModule } from './room-avaliability-routing.module';
import { RoomAvaliabilityComponent } from './room-avaliability.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvailabilitymanagerComponent } from './availabilitymanager/availabilitymanager.component';

@NgModule({
  declarations: [RoomAvaliabilityComponent, AvailabilitymanagerComponent],
  imports: [
    CommonModule,
    RoomAvaliabilityRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class RoomAvaliabilityModule { }
