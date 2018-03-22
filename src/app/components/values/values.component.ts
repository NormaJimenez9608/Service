import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import {  values } from '../../models/values';
import { ValuesService } from '../../services/values.service';
import { systems } from '../../models/systems';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  public accessKey;
  public idSystem;
  public idvalue ;
  public idValue2;
  public idValor;
  public setpoint;
  public setpoint2;
 

  SystemsModels = new systems;
  ValuesModel = new values;

  constructor(private ValuesService: ValuesService) { 
    
  }

  ngOnInit() {
    this.accessKey = localStorage.getItem('accessKey');
    this.idSystem = localStorage.getItem('idSystem');
    this.idvalue = localStorage.getItem('idValue');
    this.idValue2 = localStorage.getItem('idValue2');

    this.getValues();
   
  }

  getValues(): void{

    this.ValuesService.getValues( this.idSystem, this.accessKey, this.idvalue, this.idValue2).subscribe((valores:any)=>{
this.idValor= valores.id;
this.getValores();
    });      
  }



  
 getValores():void{
  
  this.ValuesService.getValores(this.idSystem, this.idValor, this.accessKey).subscribe((dato:any)=>{
  console.log(dato); 
  this.setpoint = dato[0].value;
  this.setpoint2 = dato[1].value;

  });
 } 
  }
