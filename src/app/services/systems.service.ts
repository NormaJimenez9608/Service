import { Injectable } from '@angular/core';
import {systems} from '../models/systems';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, Response, Headers, ResponseContentType, } from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SystemsService {
private headers = new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });

private url;


  constructor (public _http: Http,private router: Router, private HTTP: HttpClient) { 
    
  
  }

getSystems(accesKeyTest: string){
    this.url = `https://api.netbiter.net/operation/v1/rest/json/system?accesskey=${accesKeyTest}`;
    return this.HTTP.get(this.url)
}
}



