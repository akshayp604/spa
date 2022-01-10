import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationStatusComponent } from './reservation-status.component';

const routes: Routes = [{ path: '', component: ReservationStatusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationStatusRoutingModule { }
