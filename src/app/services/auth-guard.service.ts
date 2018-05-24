import { Injectable } from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import {LoginService} from './login.service'
import {Observable} from 'rxjs/Observable';
import { LoginnComponent } from '../components/loginn/loginn.component';



@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth:LoginService, private Login:LoginnComponent, private router: Router) { }

  public login;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

 this.login = LoginnComponent;
 console.log(this.login.Login)
 if (this.auth.Login(this.login.Login)){
   return true;

 }else{
  this.router.navigate(['']);
        return false;
 }
  
  }
}
