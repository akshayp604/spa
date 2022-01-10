import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreatmentStatusRoutingModule } from './treatment-status-routing.module';
import { TreatmentStatusComponent } from './treatment-status.component';
import { StatusmanagerComponent } from './statusmanager/statusmanager.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TreatmentStatusComponent, StatusmanagerComponent],
  imports: [
    CommonModule,
    TreatmentStatusRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgbModule
  ]
})
export class TreatmentStatusModule { }
