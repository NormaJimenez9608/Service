import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import {  unit } from '../../models/unit';
import { UnitService } from '../../services/unit.service';
import { SummaryResolver } from '@angular/compiler';
import { AlarmsService } from '../../services/alarms.service';



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

  constructor(private AlarmsServices: AlarmsService,   private router: Router) {
    this.accessKey = localStorage.getItem('accessKey'); 
    this.idSystem = localStorage.getItem('idSystem')
    

   }

   ngOnInit() {
    this.getAlarms();
  }
     getAlarms(): void{
    this.AlarmsServices.getAlarms(this.idSystem, this.accessKey).subscribe((alarm:any)=>{
    this.listalarms = alarm;


});
} 

}
