import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftcertificateComponent } from './giftcertificate.component';

const routes: Routes = [{ path: '', component: GiftcertificateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiftcertificateRoutingModule { }
