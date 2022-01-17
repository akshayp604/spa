import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeTypeRoutingModule } from './employee-type-routing.module';
import { EmployeeTypeComponent } from './employee-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeetypemanagementComponent } from './employeetypemanagement/employeetypemanagement.component';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [EmployeeTypeComponent, EmployeetypemanagementComponent],
  imports: [
    CommonModule,
    EmployeeTypeRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class EmployeeTypeModule { }
