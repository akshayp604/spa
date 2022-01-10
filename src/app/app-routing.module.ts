import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminguardGuard} from './gaurd/adminguard.guard'
import {AuthguardGuard} from './gaurd/authguard.guard'

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  // { path: '',redirectTo:'login', pathMatch:'full'},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) ,canActivate:[AdminguardGuard]},
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: '', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
