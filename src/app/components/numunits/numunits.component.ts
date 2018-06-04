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

  public device: any[] =[];

  SystemsModels = new systems;
  unitModel = new unit ;

    constructor(private UnitService: UnitService, private SystemsService: SystemsService,  private router: Router) {  
    this.accessKey = localStorage.getItem('accessKey');  
 }

 ngOnInit() {
  this.getSystems();
}
getSystems(): void {
  this.SystemsService.getSystems(this.accessKey).subscribe(response => {
    for (let i in response) {
    this.SystemsModels.idSystem = response[i].id;
    this.getUnit();
    }
    
  });
}
  getUnit(): void{
     
      this.UnitService.getUnit( this.SystemsModels.idSystem, this.accessKey).subscribe((data:any)=>{
      
       this.device = data;

       this.name = data[0].deviceName;

       
      
     
    
      
    // if(typeof name == "undefined"){
    //   this.name = "Hola";

    //}

        

    });
  }
}


