import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiftcertificateRoutingModule } from './giftcertificate-routing.module';
import { GiftcertificateComponent } from './giftcertificate.component';


@NgModule({
  declarations: [GiftcertificateComponent],
  imports: [
    CommonModule,
    GiftcertificateRoutingModule
  ]
})
export class GiftcertificateModule { }
