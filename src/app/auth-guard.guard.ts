import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './services/login.service';
import{Router} from '@angular/router';

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor( private user: LoginService, private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
   
      if(this.user.getUserLoggedIn()) return true;

      else 
        this.router.navigate(['/']);
      
       
  
  }
  
}
