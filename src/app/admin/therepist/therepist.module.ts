import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TherepistRoutingModule } from './therepist-routing.module';
import { TherepistComponent } from './therepist.component';


@NgModule({
  declarations: [TherepistComponent],
  imports: [
    CommonModule,
    TherepistRoutingModule
  ]
})
export class TherepistModule { }
