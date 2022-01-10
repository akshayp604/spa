import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackageMasterComponent } from './package-master.component';

const routes: Routes = [{ path: '', component: PackageMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageMasterRoutingModule { }
