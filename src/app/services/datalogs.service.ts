import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, Response, Headers, ResponseContentType, } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {  Datalog } from  '../models/datalog';

@Injectable()
export class DatalogsService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });

  private url;
  public url2;
  public url3;
  public url4;
  public url5;
  public accessKey;

  constructor(public _http: Http,private router: Router, private HTTP: HttpClient) { }



getDatalog(idSystems, accessKey:string){
  this.url = `https://api.netbiter.net/operation/v1/rest/json/system/${idSystems}/log/config?accesskey=${accessKey}`;
  console.log(this.url);
  return this.HTTP.get(this.url)
}

getDetailDay(idSystems, idLog, accessKey){
  this.url2 = `https://api.netbiter.net/operation/v1/rest/json/system/${idSystems}/log/${idLog}/aggregated/day?accesskey=${accessKey}`;
  console.log(this.url2);
  return this.HTTP.get(this.url2)
}

getDetailDay2(idSystems, idLog, accessKey, startDate, endDate){
 this.url3 = `https://api.netbiter.net/operation/v1/rest/json/system/${idSystems}/log/${idLog}/aggregated/day?accesskey=${accessKey}&startdate=${startDate}T05:00:00Z&enddate=${endDate}T05:00:00Z`
 console.log(this.url3);
  return this.HTTP.get(this.url3)
}

getDetailHours(idSystems, idLog, accessKey){
this.url4= `https://api.netbiter.net/operation/v1/rest/json/system/${idSystems}/log/${idLog}/aggregated/hour?accesskey=${accessKey}`
console.log(this.url4);
  return this.HTTP.get(this.url4)
}
getDetailHours2(idSystems, idLog, accessKey, startDate, endDate){
  this.url5= `https://api.netbiter.net/operation/v1/rest/json/system/${idSystems}/log/${idLog}/aggregated/hour?accesskey=${accessKey}&startdate=${startDate}&enddate=${endDate}`
  console.log(this.url5);
    return this.HTTP.get(this.url5)
  }

}