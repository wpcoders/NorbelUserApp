import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from './providers/authentication-service.service';
import { ServicesService } from './providers/services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceGuard implements CanActivate {
  token:any;
  constructor(private router: Router,public service: ServicesService,public storage : Storage , public auth : AuthenticationServiceService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean{
    
      console.log(this.auth.isAuthenticated());
      return this.auth.isAuthenticated();
  }
}
