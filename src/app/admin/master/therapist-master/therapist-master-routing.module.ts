import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapistMasterComponent } from './therapist-master.component';

const routes: Routes = [{ path: '', component: TherapistMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TherapistMasterRoutingModule { }
