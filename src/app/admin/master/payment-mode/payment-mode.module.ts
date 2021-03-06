import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentModeRoutingModule } from './payment-mode-routing.module';
import { PaymentModeComponent } from './payment-mode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentmodemanagerComponent } from './paymentmodemanager/paymentmodemanager.component';

@NgModule({
  declarations: [PaymentModeComponent, PaymentmodemanagerComponent],
  imports: [
    CommonModule,
    PaymentModeRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class PaymentModeModule { }
