import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import { SummaryResolver } from '@angular/compiler';
import {  Datalog2 } from '../../models/datalog2';
import { DatalogsService } from '../../services/datalogs.service';

@Component({
  selector: 'app-dataloghours',
  templateUrl: './dataloghours.component.html',
  styleUrls: ['./dataloghours.component.css'],
  providers: [Datalog2]
})
export class DataloghoursComponent implements OnInit {
  public accessKey;
  public idSystem;
  public listdata: any[] = [];
  public listdata2: any[] = [];
  public listdata3: any[] = [];
  datalog2 = new Datalog2;
  

  public Idvalor;

  constructor(private DatalogService: DatalogsService, private router: Router) { 
    this.accessKey = localStorage.getItem('accessKey'); 
    this.idSystem = localStorage.getItem('idSystem')
  }

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
   this.DatalogService.getDetailHours(this.idSystem, valueid, this.accessKey).subscribe((data2:any)=>{
   console.log(data2)
   this.listdata2 = data2
   this.Idvalor = valueid
  })
}

getHours(valueid){
  const endDate = this.datalog2.endDate;
  const startDate = this.datalog2.startDate;
  console.log(endDate)
  this.DatalogService.getDetailHours2(this.idSystem, this.Idvalor, this.accessKey, this.datalog2.startDate, this.datalog2.endDate).subscribe((data3:any)=>{
    this.listdata2= data3;
    console.log(data3)
  })

}
}
