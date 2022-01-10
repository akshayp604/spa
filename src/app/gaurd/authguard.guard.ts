import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ApiService } from '../services/api.service'

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  userinfo:any;
  constructor(    private api: ApiService,private  router: Router, private activatedRoute: ActivatedRoute
    ) {

    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userinfo.user) {
        let data = JSON.parse(this.userinfo.user);
        if(data.id && data.role && data.role != 'Admin'){
          return true;
        }else{
          this.router.navigate(['/login']);
          return false;
        }
      }else {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
  }
  
}
