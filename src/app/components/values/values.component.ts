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
  public idvalues ;
 

  SystemsModels = new systems;
  ValuesModel = new values;

  constructor(private ValuesService: ValuesService) { 
    
  }

  ngOnInit() {
    this.accessKey = localStorage.getItem('accessKey');
    this.idSystem = localStorage.getItem('idSystem');


    this.getValues();
   
  }

  getValues(): void{
    console.log('Hola');
    this.ValuesService.getValues( this.idSystem, this.accessKey).subscribe(data=>{
      localStorage.setItem('idvalues', this.idvalues);
    console.log(data);

    this.idvalues = localStorage.getItem('idvalues');
    this.ValuesService.getValores(this.idvalues, this.idSystem, this.accessKey).subscribe(dato=>{
    console.log(dato); 
    })
      
    }
    
 
    );

  }
}
