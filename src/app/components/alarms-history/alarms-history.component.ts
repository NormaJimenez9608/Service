import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import { SummaryResolver } from '@angular/compiler';
import { AlarmHistoryService} from '../../services/alarm-history.service';
import {  Alarms } from '../../models/alarms';

@Component({
  selector: 'app-alarms-history',
  templateUrl: './alarms-history.component.html',
  styleUrls: ['./alarms-history.component.css'],
   providers: [Alarms]
})
export class AlarmsHistoryComponent implements OnInit {
 public fechaActual = new Date();
 public accessKey;
public idSystem;
alarms = new Alarms();



public listalarms: any[] = [];

  constructor(private AlarmsHistory: AlarmHistoryService ,private router: Router, ) { 
 this.accessKey = localStorage.getItem('accessKey'); 
  this.idSystem = localStorage.getItem('idSystem')}
  ngOnInit() {
    this.getAlarmsHistory();
  }

  getAlarmsHistory(): void{
this.AlarmsHistory.getAlarmsHistory(this.idSystem, this.accessKey). subscribe((dato:any)=>{

this.listalarms= dato;
console.log(dato)
})

  }

  Alarms():void{
    const endDate = this.alarms.endDate;
    const startDate = this.alarms.startDate;

    
    this.AlarmsHistory.getDate(this.idSystem, this.accessKey, this.alarms.startDate, this.alarms.endDate). subscribe((data:any)=>{
    this.listalarms= data;
console.log(data)
    })
  }
}
