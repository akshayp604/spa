import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageDetailRoutingModule } from './package-detail-routing.module';
import { PackageDetailComponent } from './package-detail.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PackagemanagerComponent } from './packagemanager/packagemanager.component';

@NgModule({
  declarations: [PackageDetailComponent, PackagemanagerComponent],
  imports: [
    CommonModule,
    PackageDetailRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgbModule
  ]
})
export class PackageDetailModule { }
