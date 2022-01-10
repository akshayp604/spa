import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountrymasterComponent } from './countrymaster.component';

const routes: Routes = [{ path: '', component: CountrymasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountrymasterRoutingModule { }
