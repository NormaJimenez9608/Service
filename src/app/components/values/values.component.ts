import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import {  values } from '../../models/values';
import { ValuesService } from '../../services/values.service';
<<<<<<< HEAD
import { systems } from '../../models/systems.models';
=======
import { systems } from '../../models/systems';
import { SystemsService } from '../../services/systems.service';
import { UnitService } from '../../services/unit.service';
>>>>>>> 787590e941b422150f54f2aaf47028fb2e508736

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  public accessKey;
<<<<<<< HEAD
  public idSystem;
=======
  public deviceSelect;
  public idvalue ;
  public idValue2;
  public idValor;
>>>>>>> 787590e941b422150f54f2aaf47028fb2e508736
  public setpoint;
  public temperatura;
  public controlvalue;
  public idValor;
  public setpoint1;
  public temperatura1;
  public controlvalue1;
  SystemsModels = new systems;
  ValuesModel = new values;

  constructor(private ValuesService: ValuesService, private SystemsService: SystemsService, private UnitService: UnitService) { 
    
  }

  ngOnInit() {
    this.accessKey = localStorage.getItem('accessKey');
<<<<<<< HEAD
    this.idSystem = localStorage.getItem('idSystem');
    this.setpoint = localStorage.getItem('setpoint');
    this.temperatura = localStorage.getItem('temperatura');
    this.controlvalue = localStorage.getItem('controlvalue');
  
=======
    this.deviceSelect = localStorage.getItem('deviceSelect');
>>>>>>> 787590e941b422150f54f2aaf47028fb2e508736

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

<<<<<<< HEAD
    this.ValuesService.getValues( this.idSystem, this.accessKey, this.setpoint, this.temperatura, this.controlvalue).subscribe((valores:any)=>{
=======
  getValues(): void{
console.log(this.deviceSelect);
    this.ValuesService.getValues( this.SystemsModels.idSystem, this.accessKey, this.deviceSelect, this.idValue2).subscribe((valores:any)=>{
>>>>>>> 787590e941b422150f54f2aaf47028fb2e508736
this.idValor= valores.id;
console.log(valores);
this.getValores();
    });      
  }

 getValores():void{
  
  this.ValuesService.getValores(this.SystemsModels.idSystem, this.idValor, this.accessKey).subscribe((dato:any)=>{
  console.log(dato); 
  this.setpoint1 = dato[0].value;
  this.temperatura1 = dato[1].value;
  this.controlvalue1 = dato[2].value;



  });
 } 
  }
