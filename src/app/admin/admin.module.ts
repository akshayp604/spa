import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './admin-shared/header/header.component';
import { SidebarComponent } from './admin-shared/sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule, ReactiveFormsModule 
  ]
})
export class AdminModule { }
