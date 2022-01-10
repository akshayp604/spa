import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomermasterComponent } from './customermaster.component';

const routes: Routes = [{ path: '', component: CustomermasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomermasterRoutingModule { }
