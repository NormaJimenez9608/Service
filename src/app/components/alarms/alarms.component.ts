import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import {  unit } from '../../models/unit';
import { UnitService } from '../../services/unit.service';
import { systems } from '../../models/systems.models';
import { SystemsService } from '../../services/systems.service';
import { SummaryResolver } from '@angular/compiler';
import { AlarmsService } from '../../services/alarms.service';
import { ExcelService } from '../../services/excel.service';


@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css'],
  providers: [systems]
})
export class AlarmsComponent implements OnInit {
 
  public systems:systems = new systems();
  public accessKey;
  public idSystem;
  public listalarms: any[] = [];
  public tableexcel ;

  SystemsModels = new systems;

  constructor(private AlarmsServices: AlarmsService, private SystemsService: SystemsService,  private router: Router, private excelService: ExcelService) {
    this.accessKey = localStorage.getItem('accessKey'); 
    this.excelService = excelService;

   }

   ngOnInit() {
    this.getSystems();
  }
  getSystems(): void {
    this.SystemsService.getSystems(this.accessKey).subscribe(response => {
      for (let i in response) {
      this.SystemsModels.idSystem = response[i].id;
      this.getAlarms();
      }
        
  });
}
     getAlarms(): void{
    this.AlarmsServices.getAlarms(this.SystemsModels.idSystem, this.accessKey).subscribe((alarm:any)=>{
    this.listalarms = alarm;


});
} 

exportToExcel(event) {
  this.tableexcel = this.listalarms
  console.log(this.listalarms)
  this.excelService.exportAsExcelFile(this.listalarms, 'Alarms');
}
}
