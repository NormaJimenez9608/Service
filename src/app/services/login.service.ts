import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, ResponseContentType, } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });

  public username;
  private url;
  public accesKeyTest;
  private IsUserLoginIn;

  constructor(public _http: Http, private router: Router) {
    this.url = 'https://api.netbiter.net/operation/v1/rest/json/user/authenticate';
    this.IsUserLoginIn = true;
    const caseloginget = JSON.parse(localStorage.getItem('caselogin'));
    if(caseloginget=='true'){
      this.setUserLoggedIn();
    }
    else{
      this.setUserLoggedOff();
      this.router.navigateByUrl('/');
    }
  }

  Login(modelologin: Login) {
    const body = {
      'userName': modelologin.username,
      'password': modelologin.password
    }
    return this._http.post(this.url, body, { headers: this.headers }).map(res => {
      this.IsUserLoginIn = true;
      localStorage.setItem('ValidatorAcces', this.IsUserLoginIn);
      localStorage.setItem('accessKey', res.json().accessKey);
      this.accesKeyTest = localStorage.getItem('accessKey');
      res.json()
    });
  }

  getUserLoggedIn() {
    return this.IsUserLoginIn;
  }

logout() {

  this.IsUserLoginIn = false;

}
setUserLoggedIn() {
this.IsUserLoginIn = true;
}
setUserLoggedOff(){
this.IsUserLoginIn = false;
}

}






