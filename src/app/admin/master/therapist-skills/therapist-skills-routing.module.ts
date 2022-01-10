import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapistSkillsComponent } from './therapist-skills.component';

const routes: Routes = [{ path: '', component: TherapistSkillsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TherapistSkillsRoutingModule { }
