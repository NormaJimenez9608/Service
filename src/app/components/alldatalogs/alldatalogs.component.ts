import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import { SummaryResolver } from '@angular/compiler';
import { DatalogsService } from '../../services/datalogs.service';


@Component({
  selector: 'app-alldatalogs',
  templateUrl: './alldatalogs.component.html',
  styleUrls: ['./alldatalogs.component.css']
})
export class AlldatalogsComponent implements OnInit {

  public accessKey;
  public idSystem;
  public listdata: any[] = [];
  public listID: any[] = [];
  public listvalues: any[]=[];

  constructor( private DatalogService: DatalogsService, private router: Router) {
    this.accessKey = localStorage.getItem('accessKey'); 
    this.idSystem = localStorage.getItem('idSystem')
   }

  ngOnInit() {
    this.getDatalogs()
  }

  getDatalogs(): void{
this.DatalogService.getDatalog(this.idSystem, this.accessKey).subscribe((data:any)=>{
  this.listdata= data;
  
  for(let i in data){
  this.listID.push(data[i].id)
  
  }

  for (let i in this.listID){
    this.DatalogService.getAllDatalog(this.idSystem, this.listID[i], this.accessKey).subscribe((data2:any)=>{
console.log(data2)
this.listID=data2
    })

  }
})
  }

 
 

}
