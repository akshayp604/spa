import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaComponent } from './spa.component';

const routes: Routes = [{ path: '', component: SpaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaRoutingModule { }
