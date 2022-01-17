import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageMasterRoutingModule } from './package-master-routing.module';
import { PackageMasterComponent } from './package-master.component';
import { PackagemangerComponent } from './packagemanger/packagemanger.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PackageMasterComponent, PackagemangerComponent],
  imports: [
    CommonModule,
    PackageMasterRoutingModule,
    NgxPaginationModule,
    FormsModule, ReactiveFormsModule, NgbModule
  ]
})
export class PackageMasterModule { }
