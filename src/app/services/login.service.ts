import { Injectable } from '@angular/core';
import {Login} from '../models/login';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, Response, Headers} from '@angular/http';

// aqui se importan

@Injectable()
export class LoginService {
// aqui se declara el headers, username, url
private headers = new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });

public username;
private url;

//dentro de () de constructor se declara http y router
  constructor (private _http: Http,private router: Router) { 
    this.url = 'https://api.netbiter.net/operation/v1/rest/json/user/authenticate';     
  }

  //aqui se crea funcion  login 

Login(modelologin:Login){
  const body= {
    'username': modelologin.username,
    'password': modelologin.password
}
console.log(body);
  return this._http.post(this.url, body, {headers: this.headers}).map(res=>res.json());
}
}


