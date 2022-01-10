import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapyCategoryComponent } from './therapy-category.component';

const routes: Routes = [{ path: '', component: TherapyCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TherapyCategoryRoutingModule { }
