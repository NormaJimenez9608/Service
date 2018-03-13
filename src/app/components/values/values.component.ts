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
    console.log('Hola');
    this.ValuesService.getValues( this.idSystem, this.accessKey, this.idvalue, this.idValue2).subscribe(valores=>{
    
      this.idValor = valores[0].id;
      localStorage.setItem('idValor', this.idValor);
      console.log(valores);
    });

    this.idValor = localStorage.getItem('idValor');
    this.ValuesService.getValores(this.idSystem, this.idValor, this.accessKey).subscribe(dato=>{
    console.log(dato); 
    });
      
  }
  
  }

