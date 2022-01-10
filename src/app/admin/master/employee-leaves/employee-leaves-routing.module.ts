import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeLeavesComponent } from './employee-leaves.component';

const routes: Routes = [{ path: '', component: EmployeeLeavesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeLeavesRoutingModule { }
