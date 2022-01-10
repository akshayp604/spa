import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoommangementComponent } from './roommangement/roommangement.component';


@NgModule({
  declarations: [RoomComponent, RoommangementComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    FormsModule, ReactiveFormsModule 
  ]
})
export class RoomModule { }
