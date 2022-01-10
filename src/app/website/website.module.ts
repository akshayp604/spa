import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HeaderComponent } from './website-shared/header/header.component';
import { FooterComponent } from './website-shared/footer/footer.component';


@NgModule({
  declarations: [WebsiteComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    NgbModule
  ]
})
export class WebsiteModule { }
