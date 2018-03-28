import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import {  values } from '../../models/values';
import { ValuesService } from '../../services/values.service';
import { systems } from '../../models/systems';
import { SystemsService } from '../../services/systems.service';
import { UnitService } from '../../services/unit.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  public accessKey;
  public deviceSelect;
  public idvalue ;
  public idValue2;
  public idValor;
  public setpoint;
  public setpoint2;
 

  SystemsModels = new systems;
  ValuesModel = new values;

  constructor(private ValuesService: ValuesService, private SystemsService: SystemsService, private UnitService: UnitService) { 
    
  }

  ngOnInit() {
    this.accessKey = localStorage.getItem('accessKey');
    this.deviceSelect = localStorage.getItem('deviceSelect');

    this.getSystems();
   
  }

  getSystems(): void {
    this.SystemsService.getSystems(this.accessKey).subscribe(response => {
      this.SystemsModels.idSystem = response[0].id;
      this.getUnit();
    });
  }
  getUnit(): void {
    this.UnitService.getUnit(this.SystemsModels.idSystem, this.accessKey).subscribe((data:any) => {
      console.log(data);
      this.getValues();
      for (let i = data.length - 1; i >= 0; i--) {
        if(data[i].id == this.deviceSelect){
console.log(data[i].id, this.deviceSelect);
this.getValues();
        }
      }
    });
  }

  getValues(): void{
console.log(this.deviceSelect);
    this.ValuesService.getValues( this.SystemsModels.idSystem, this.accessKey, this.deviceSelect, this.idValue2).subscribe((valores:any)=>{
this.idValor= valores.id;
console.log(valores);
this.getValores();
    });      
  }



  
 getValores():void{
  
  this.ValuesService.getValores(this.SystemsModels.idSystem, this.idValor, this.accessKey).subscribe((dato:any)=>{
  console.log(dato); 
  this.setpoint = dato[0].value;
  this.setpoint2 = dato[1].value;

  });
 } 
  }
