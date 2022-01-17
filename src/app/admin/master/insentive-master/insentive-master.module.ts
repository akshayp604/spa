import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsentiveMasterRoutingModule } from './insentive-master-routing.module';
import { InsentiveMasterComponent } from './insentive-master.component';
import { InsentivManagerComponent } from './insentiv-manager/insentiv-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [InsentiveMasterComponent, InsentivManagerComponent],
  imports: [
    CommonModule,
    InsentiveMasterRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class InsentiveMasterModule { }
