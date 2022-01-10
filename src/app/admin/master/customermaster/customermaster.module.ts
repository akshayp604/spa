import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomermasterRoutingModule } from './customermaster-routing.module';
import { CustomermasterComponent } from './customermaster.component';
import { CustomerManagmentComponent } from './customer-managment/customer-managment.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustomermasterComponent, CustomerManagmentComponent],
  imports: [
    CommonModule,
    CustomermasterRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class CustomermasterModule { }
