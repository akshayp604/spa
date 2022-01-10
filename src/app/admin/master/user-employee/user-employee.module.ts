import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserEmployeeRoutingModule } from './user-employee-routing.module';
import { UserEmployeeComponent } from './user-employee.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';

@NgModule({
  declarations: [UserEmployeeComponent, UsermanagementComponent],
  imports: [
    CommonModule,
    UserEmployeeRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgbModule
  ]
})
export class UserEmployeeModule { }
