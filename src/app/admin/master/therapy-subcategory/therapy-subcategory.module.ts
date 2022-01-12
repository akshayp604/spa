import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TherapySubcategoryRoutingModule } from './therapy-subcategory-routing.module';
import { TherapySubcategoryComponent } from './therapy-subcategory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubcategorymanagerComponent } from './subcategorymanager/subcategorymanager.component';

@NgModule({
  declarations: [TherapySubcategoryComponent, SubcategorymanagerComponent,],
  imports: [
    CommonModule,
    TherapySubcategoryRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class TherapySubcategoryModule { }
