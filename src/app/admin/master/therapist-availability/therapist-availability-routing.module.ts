import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapistAvailabilityComponent } from './therapist-availability.component';

const routes: Routes = [{ path: '', component: TherapistAvailabilityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TherapistAvailabilityRoutingModule { }
