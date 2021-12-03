import { Injectable, } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router:Router) { }
  canActivate(next : ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>{
    if (localStorage.getItem('currentUser')) {
      return true
    }else{
      this.router.navigate(['log-in'])
      return false
    }
  }
}
