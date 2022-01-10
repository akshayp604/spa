import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebsiteComponent } from './website.component';

const routes: Routes = [{ path: '', component: WebsiteComponent,children:[
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {path: 'book-appointment', loadChildren: () => import('./book-appointment/book-appointment.module').then(m => m.BookAppointmentModule) }
] }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
