import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [ 
{	path: '',
	component: AdminComponent,
	children: [
{ path: 'appointment', loadChildren: () => import('./appointment/appointment.module').then(m => m.AppointmentModule),data:{title:'Appointment'} },
{ path: 'therepist', loadChildren: () => import('./therepist/therepist.module').then(m => m.TherepistModule), data:{title:'Therepist'} },
{ path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule),data:{title:'Sales'}},
{ path: 'master', loadChildren: () => import('./master/master.module').then(m => m.MasterModule),data:{title:'Master'} }]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
