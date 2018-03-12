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
    });
  }
}


