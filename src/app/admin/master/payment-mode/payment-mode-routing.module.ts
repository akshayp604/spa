import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentModeComponent } from './payment-mode.component';

const routes: Routes = [{ path: '', component: PaymentModeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentModeRoutingModule { }
