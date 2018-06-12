import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import {  unit } from '../../models/unit';
import { UnitService } from '../../services/unit.service';
import { SummaryResolver } from '@angular/compiler';
import { AlarmsService } from '../../services/alarms.service';
import { ExcelService } from '../../services/excel.service';


@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css'],
  providers: []
})
export class AlarmsComponent implements OnInit {
 
  public accessKey;
  public idSystem;
  public listalarms: any[] = [];
  public tableexcel ;
  public rowsOnPage = 5;

  constructor(private AlarmsServices: AlarmsService,   private router: Router, private excelService: ExcelService) {
    this.accessKey = localStorage.getItem('accessKey'); 
    this.idSystem = localStorage.getItem('idSystem')
    this.excelService = excelService;

   }

   ngOnInit() {
    this.getAlarms();
  }
     getAlarms(): void{
    this.AlarmsServices.getAlarms(this.idSystem, this.accessKey).subscribe((alarm:any)=>{
    this.listalarms = alarm;


});
} 

exportToExcel(data) {
  this.tableexcel = data
  console.log(this.listalarms)
  this.excelService.exportAsExcelFile(this.tableexcel, 'Alarms');
}
}
