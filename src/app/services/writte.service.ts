import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, Response, Headers, ResponseContentType, } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {values} from '../models/values';

@Injectable()
export class WritteService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });

  public value;
  public url;
  public id;

  constructor(public _http: Http,private router: Router) { 
    
  }

  Values(modelovalue:values,idSystem:string, accessKey:string, idsetpoint:string ){
    const body= {
      'id' : idsetpoint ,
      'value': modelovalue.value
    }

  console.log(body);

  this.url = `https://api.netbiter.net/operation/v1/rest/json/system/${idSystem}/live/async?accesskey=${accessKey}&id=${idsetpoint}`;
  return this._http.put(this.url, body, {headers: this.headers}).map(res=>
    {
      
      res.json()});

}
}



