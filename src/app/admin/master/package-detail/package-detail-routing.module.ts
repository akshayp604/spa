import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackageDetailComponent } from './package-detail.component';

const routes: Routes = [{ path: '', component: PackageDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageDetailRoutingModule { }
