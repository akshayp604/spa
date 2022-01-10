import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserEmployeeComponent } from './user-employee.component';

const routes: Routes = [{ path: '', component: UserEmployeeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserEmployeeRoutingModule { }
