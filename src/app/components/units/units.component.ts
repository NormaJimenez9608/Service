import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import {  unit } from '../../models/unit';
import { UnitService } from '../../services/unit.service';

import { systems } from '../../models/systems';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class  UnitsComponent implements OnInit {

  public accessKey;
  public idSystem;
  public idValue;
  public nameValue;
  public idValue2;
  public nameValue2;

  SystemsModels = new systems;
  unitModel = new unit ;

  constructor(private UnitService: UnitService) {  
    this.accessKey = localStorage.getItem('accessKey');
    this.idSystem = localStorage.getItem('idSystem');
 }

  ngOnInit() {
    this.getUnit();
  }

  getUnit(): void{
    this.UnitService.getUnit(this.idSystem, this.accessKey).subscribe(data=>{
      this.idValue = data[0].id,
      this.nameValue= data[0].name,
      this.idValue2 = data[2].id,
      this.nameValue2= data[2].name,
      localStorage.setItem('idValue', this.idValue);
      localStorage.setItem('idValue2', this.idValue2);
      
      console.log(data);

    });
  }
}


