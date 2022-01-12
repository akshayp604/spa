import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TherapistSkillsRoutingModule } from './therapist-skills-routing.module';
import { TherapistSkillsComponent } from './therapist-skills.component';
import { TherapyskillmanagerComponent } from './therapyskillmanager/therapyskillmanager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TherapistSkillsComponent, TherapyskillmanagerComponent],
  imports: [
    CommonModule,
    TherapistSkillsRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class TherapistSkillsModule { }
