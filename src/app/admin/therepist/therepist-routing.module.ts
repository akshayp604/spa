import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherepistComponent } from './therepist.component';

const routes: Routes = [{ path: '', component: TherepistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TherepistRoutingModule { }
