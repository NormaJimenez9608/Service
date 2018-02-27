import { Injectable } from '@angular/core';
import {Login} from '../models/login';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, Response, Headers, ResponseContentType, } from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {
private headers = new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });

public username;
private url;

  constructor (public _http: Http,private router: Router) { 
    this.url = 'https://api.netbiter.net/operation/v1/rest/json/user/authenticate';

  }

Login(modelologin:Login){
  const body= {
    'userName': modelologin.username,
    'password': modelologin.password
}
console.log(body);

  return this._http.post(this.url, body, {headers: this.headers}).map(res=>res.json());
   
}

}
