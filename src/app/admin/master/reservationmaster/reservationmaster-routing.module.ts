import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationmasterComponent } from './reservationmaster.component';

const routes: Routes = [{ path: '', component: ReservationmasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationmasterRoutingModule { }
