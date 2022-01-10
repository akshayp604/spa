import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TherapyCategoryRoutingModule } from './therapy-category-routing.module';
import { TherapyCategoryComponent } from './therapy-category.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CategorymanagerComponent } from './categorymanager/categorymanager.component';

@NgModule({
  declarations: [TherapyCategoryComponent, CategorymanagerComponent],
  imports: [
    CommonModule,
    TherapyCategoryRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgbModule
  ]
})
export class TherapyCategoryModule { }
