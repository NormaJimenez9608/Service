import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import { SummaryResolver } from '@angular/compiler';
import {  Datalog2 } from '../../models/datalog2';
import { DatalogsService } from '../../services/datalogs.service';
import { DatePipe } from '@angular/common';

declare function unescape(s:string): string;
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
  public startDat;
  public endDat;
  datalog2 = new Datalog2;
  onEnter(valueid){
    this.getHours(valueid);
}

  public Idvalor;

  constructor(private DatalogService: DatalogsService, private router: Router, private datePipe: DatePipe) { 
    this.accessKey = localStorage.getItem('accessKey'); 
    this.idSystem = localStorage.getItem('idSystem')
  }

  ngOnInit() {
    this.getDatalogs();
    
  }
  getDatalogs(): void{
    this.DatalogService.getDatalog(this.idSystem, this.accessKey).subscribe((data:any)=>{
    this.listdata= data;
    console.log(this.listdata)

     this.DatalogService.getDetailHours(this.idSystem, data[0].id, this.accessKey).subscribe((data2:any)=>{
      
      this.listdata2 = data2

      this.startDat = data2[data2.length - 1].timestamp
      this.endDat = data2[0].timestamp;
      this.datalog2.startDate = this.datePipe.transform(this.startDat, 'yyyy-MM-ddThh:mm');
      this.datalog2.endDate = this.datePipe.transform(this.endDat, 'yyyy-MM-ddThh:mm')
this.onChange(data[0].id);
    })
  
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
tableToExcel = (function() {
    
  var uri = 'data:application/vnd.ms-excel;base64,'
    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  return function(table, name) {
    if (!table.nodeType) table = document.getElementById(table)
    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    window.location.href = uri + base64(format(template, ctx))
    
  }
})()
}
