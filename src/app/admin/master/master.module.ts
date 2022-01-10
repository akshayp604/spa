import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MasterComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class MasterModule { }
