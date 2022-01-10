import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapySubCategoryDetailComponent } from './therapy-sub-category-detail.component';

const routes: Routes = [{ path: '', component: TherapySubCategoryDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TherapySubCategoryDetailRoutingModule { }
