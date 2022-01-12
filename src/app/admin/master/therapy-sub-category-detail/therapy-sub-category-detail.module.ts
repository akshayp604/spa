import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TherapySubCategoryDetailRoutingModule } from './therapy-sub-category-detail-routing.module';
import { TherapySubCategoryDetailComponent } from './therapy-sub-category-detail.component';
import { TherapysubcatmanagerComponent } from './therapysubcatmanager/therapysubcatmanager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TherapySubCategoryDetailComponent, TherapysubcatmanagerComponent],
  imports: [
    CommonModule,
    TherapySubCategoryDetailRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class TherapySubCategoryDetailModule { }
