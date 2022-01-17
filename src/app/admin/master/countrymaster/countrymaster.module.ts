import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountrymasterRoutingModule } from './countrymaster-routing.module';
import { CountrymasterComponent } from './countrymaster.component';
import { CountrymanagementComponent } from './countrymanagement/countrymanagement.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [CountrymasterComponent, CountrymanagementComponent],
  imports: [
    CommonModule,
    CountrymasterRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class CountrymasterModule { }
