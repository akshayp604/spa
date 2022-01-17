import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscountmatserRoutingModule } from './discountmatser-routing.module';
import { DiscountmatserComponent } from './discountmatser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiscountMangementComponent } from './discount-mangement/discount-mangement.component';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [DiscountmatserComponent, DiscountMangementComponent],
  imports: [
    CommonModule,
    DiscountmatserRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class DiscountmatserModule { }
