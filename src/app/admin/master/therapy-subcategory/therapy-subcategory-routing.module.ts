import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapySubcategoryComponent } from './therapy-subcategory.component';

const routes: Routes = [{ path: '', component: TherapySubcategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TherapySubcategoryRoutingModule { }
