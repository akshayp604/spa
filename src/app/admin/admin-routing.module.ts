import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [ 
{	path: '',
	component: AdminComponent,
	children: [
{ path: 'appointment', loadChildren: () => import('./appointment/appointment.module').then(m => m.AppointmentModule),data:{title:'Appointments'} },
{ path: 'therepist', loadChildren: () => import('./therepist/therepist.module').then(m => m.TherepistModule), data:{title:'Therapists'} },
{ path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule),data:{title:'Sales'}},
{ path: 'master', loadChildren: () => import('./master/master.module').then(m => m.MasterModule),data:{title:'Master'} },
{ path: 'giftcertificate', loadChildren: () => import('./giftcertificate/giftcertificate.module').then(m =>m.GiftcertificateModule),data:{title:'Gift Certificate'}},
{ path: 'analytics', loadChildren: () => import('./analytics/analytics.module').then(m =>m.AnalyticsModule),data:{title:'Analytics'}},
{ path: 'products', loadChildren: () => import('./products/products.module').then(m =>m.ProductsModule),data:{title:'Products'}},
{ path: 'communications', loadChildren: () => import('./communications/communications.module').then(m =>m.CommunicationsModule),data:{title:'Communications'}},
{ path: 'settings', loadChildren: () => import('./settings/settings.module').then(m =>m.SettingsModule),data:{title:'Settings'}},

]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
