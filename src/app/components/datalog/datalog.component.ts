import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import { SummaryResolver } from '@angular/compiler';
import { DatalogsService } from '../../services/datalogs.service';
import {  Datalog } from '../../models/datalog';

@Component({
  selector: 'app-datalog',
  templateUrl: './datalog.component.html',
  styleUrls: ['./datalog.component.css'],
    providers: [Datalog]
})
export class DatalogComponent implements OnInit {
  public accessKey;
  public idSystem;
  public listdata: any[] = [];
  public listdata2: any[] = [];
  public listdata3: any[] = [];
  datalog = new Datalog;
  public Idvalor;

  constructor(private DatalogService: DatalogsService, private router: Router) { 
    this.accessKey = localStorage.getItem('accessKey'); 
    this.idSystem = localStorage.getItem('idSystem')}

  ngOnInit() {
    this.getDatalogs()
  }
  getDatalogs(): void{
    this.DatalogService.getDatalog(this.idSystem, this.accessKey).subscribe((data:any)=>{
    this.listdata= data;
    console.log(this.listdata)
    })
      }

  onChange(valueid){
  console.log(valueid)
  this.DatalogService.getDetailDay(this.idSystem, valueid, this.accessKey).subscribe((data2:any)=>{
    console.log(data2)
    this.listdata2 = data2
    this.Idvalor = valueid

  })
      }

  getDay(valueid){
    const endDate = this.datalog.endDate;
    const startDate = this.datalog.startDate;
    console.log(endDate)
    this.DatalogService.getDetailDay2(this.idSystem, this.Idvalor, this.accessKey, this.datalog.startDate, this.datalog.endDate).subscribe((data3:any)=>{
      this.listdata2= data3;
      console.log(data3)
    })

  }
}
