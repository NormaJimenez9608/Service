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
  public id;
  SystemsModels = new systems;
  ValuesModel = new values;

  constructor(private ValuesService: ValuesService) { }

  ngOnInit() {
    this.accessKey = localStorage.getItem('accessKey');
    this.id  = this.SystemsModels.id;
    this.getValues();
  }

  getValues(): void{
    this.ValuesService.getValues( this.id, this.accessKey).subscribe(data=>{
    console.log(data)
    }
    
    );

  }
}
