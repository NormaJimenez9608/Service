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
public idValue;
public idValues2;

  constructor (public _http: Http,private router: Router, private HTTP: HttpClient) { 
    
  }

getValues(idSystem:string, accessKey:string, idvalue:string, idValue2:string){
  
 
    this.url = `https://api.netbiter.net/operation/v1/rest/json/system/${idSystem}/live/async?accesskey=${accessKey}&id=${idvalue}&id=${idValue2}`;
    console.log(this.url);
    return this.HTTP.get(this.url)
    
}

getValores( idSystem:string, idValor:string, accessKey:string){
  console.log('Paso revision en la segunda API');
    this.url = `https://api.netbiter.net/operation/v1/rest/json/system/${idSystem}/live/async/${idValor}?accesskey=${accessKey}`;
    console.log(this.url);
    return this.HTTP.get(this.url)
    
}


}
