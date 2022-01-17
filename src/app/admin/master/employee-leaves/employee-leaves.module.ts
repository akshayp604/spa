import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeLeavesRoutingModule } from './employee-leaves-routing.module';
import { EmployeeLeavesComponent } from './employee-leaves.component';
import { EmpleavemanagementComponent } from './empleavemanagement/empleavemanagement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';


import { DateTimePickerModule } from 'ngx-datetime-picker';

@NgModule({
  declarations: [EmployeeLeavesComponent, EmpleavemanagementComponent],
  imports: [
    CommonModule,
    EmployeeLeavesRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
    DateTimePickerModule
  ]
})
export class EmployeeLeavesModule { }
