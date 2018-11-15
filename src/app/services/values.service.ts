import { Injectable } from '@angular/core';
import {values} from '../models/values';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, Response, Headers, ResponseContentType, } from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ValuesService {
private headers = new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });

private url;
public accessKey;
public idSystem;
private url2 ;


  constructor (public _http: Http,private router: Router, private HTTP: HttpClient) { 
    
  }

getValues(idSystem:string, accessKey:string, value:string){
  
 
    this.url = `https://api.netbiter.net/operation/v1/rest/json/system/${idSystem}/live/async?accesskey=${accessKey}&id=${value}`;
 
    return this.HTTP.get(this.url)
    
}

getValores( idSystem:string, idValor:string, accessKey:string){
  
    this.url2 = `https://api.netbiter.net/operation/v1/rest/json/system/${idSystem}/live/async/${idValor}?accesskey=${accessKey}`;

    return this.HTTP.get(this.url2)
    
}
}
