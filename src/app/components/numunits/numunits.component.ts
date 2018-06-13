import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import {  unit } from '../../models/unit';
import { UnitService } from '../../services/unit.service';
import { systems } from '../../models/systems.models';
import { SystemsService } from '../../services/systems.service';
import { SummaryResolver } from '@angular/compiler';

@Component({
  selector: 'app-numunits',
  templateUrl: './numunits.component.html',
  styleUrls: ['./numunits.component.css'],
  providers: [systems]
})
export class  NumunitsComponent implements OnInit {

  public accessKey;
  public idSystem;
  public idValue;
  public systems:systems = new systems();
  public number;
  public name;
  public name2;
   names: any[];
  public device: any[] =[];

  SystemsModels = new systems;
  unitModel = new unit ;

    constructor(private UnitService: UnitService, private SystemsService: SystemsService,  private router: Router) {  
    this.accessKey = localStorage.getItem('accessKey');  
    this.idSystem = localStorage.getItem('idSystem')
 }

 ngOnInit() {
  this.getUnit();
}

  getUnit(): void{
     
      this.UnitService.getUnit( this.idSystem, this.accessKey).subscribe((data:any)=>{
      // this.names=[
      // data[0].deviceName
      // ]
      //  for (let i of data.deviceName){
      //   if(data.deviceName !== this.names){
      //    console.log(data.deviceName)
      //   this.names.push(data.deviceName);
    this.device = data

console.log(this.names);

       this.name = data[0].deviceName;

    });
  }

  onSelect(data) {

    console.log([data.id]);
    
    
  }
  
}


