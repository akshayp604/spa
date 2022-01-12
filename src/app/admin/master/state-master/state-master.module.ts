import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateMasterRoutingModule } from './state-master-routing.module';
import { StateMasterComponent } from './state-master.component';
import { StatemanagerComponent } from './statemanager/statemanager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [StateMasterComponent, StatemanagerComponent],
  imports: [
    CommonModule,
    StateMasterRoutingModule,
    NgxPaginationModule,
    FormsModule, ReactiveFormsModule, NgbModule
  ]
})
export class StateMasterModule { }
