import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TherapistMasterRoutingModule } from './therapist-master-routing.module';
import { TherapistMasterComponent } from './therapist-master.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TherapiestmanagerComponent } from './therapiestmanager/therapiestmanager.component';
@NgModule({
  declarations: [TherapistMasterComponent, TherapiestmanagerComponent],
  imports: [
    CommonModule,
    TherapistMasterRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class TherapistMasterModule { }
