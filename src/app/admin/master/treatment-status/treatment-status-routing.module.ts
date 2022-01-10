import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreatmentStatusComponent } from './treatment-status.component';

const routes: Routes = [{ path: '', component: TreatmentStatusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreatmentStatusRoutingModule { }
