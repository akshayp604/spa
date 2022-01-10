import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaRoutingModule } from './spa-routing.module';
import { SpaComponent } from './spa.component';
import { SpaManegmentComponent } from './spa-manegment/spa-manegment.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SpaComponent, SpaManegmentComponent],
  imports: [
    CommonModule,
    SpaRoutingModule,
    FormsModule, ReactiveFormsModule 
  ]
})
export class SpaModule { }
