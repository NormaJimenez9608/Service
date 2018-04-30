import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import {  values } from '../../models/values';
import { ValuesService } from '../../services/values.service';
import { systems } from '../../models/systems.models';
import { WritteService} from '../../services/writte.service'

@Component({
  selector: 'app-values2',
  templateUrl: './values2.component.html',
  styleUrls: ['./values2.component.css']
})
export class Values2Component implements OnInit {

  public accessKey;
  public idSystem;
  public temperatura ;
  public controlvalue;
  public idValor;
  public setpoint;
  public setpoint2;
  public setpoint3 ;
  public temperatura3 ;
  public controlvalue3;
  public idsetpoint;
 

  SystemsModels = new systems;
  ValuesModel = new values;

  constructor(private ValuesService: ValuesService, private values1: WritteService) { 
    
  }

  ngOnInit() {
    this.accessKey = localStorage.getItem('accessKey');
    this.idSystem = localStorage.getItem('idSystem');
    this.setpoint = localStorage.getItem('setpoint2');
    this.temperatura = localStorage.getItem('temperatura2');
    this.controlvalue = localStorage.getItem('controlvalue2');
  

    this.getValues();
   
  }

  getValues(): void{

    this.ValuesService.getValues( this.idSystem, this.accessKey, this.setpoint, this.temperatura, this.controlvalue).subscribe((valores:any)=>{
this.idValor= valores.id;
this.getValores();
    });      
  }

 getValores():void{
  
  this.ValuesService.getValores(this.idSystem, this.idValor, this.accessKey).subscribe((dato:any)=>{
  console.log(dato); 
  this.setpoint3 = dato[2].value;
  this.temperatura3 = dato[0].value;
  this.controlvalue3 = dato[1].value;
  this.idsetpoint = dato[2].id


  });
 } 

 
 Values(): void{
  const value = this.ValuesModel.value;
  
  this.values1.Values(this.ValuesModel,this.idSystem, this.accessKey, this.idsetpoint ).subscribe( response=>{
    
  });
}
  }
  }