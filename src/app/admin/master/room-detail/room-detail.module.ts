import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomDetailRoutingModule } from './room-detail-routing.module';
import { RoomDetailComponent } from './room-detail.component';
import { DetailManagmentComponent } from './detail-managment/detail-managment.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [RoomDetailComponent, DetailManagmentComponent],
  imports: [
    CommonModule,
    RoomDetailRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgbModule
    
  ]
})
export class RoomDetailModule { }
