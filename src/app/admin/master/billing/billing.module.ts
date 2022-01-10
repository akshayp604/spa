import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';
import { BillingManagementComponent } from './billing-management/billing-management.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BillingComponent, BillingManagementComponent],
  imports: [
    CommonModule,
    BillingRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class BillingModule { }
