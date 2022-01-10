import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscountmatserComponent } from './discountmatser.component';

const routes: Routes = [{ path: '', component: DiscountmatserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscountmatserRoutingModule { }
