import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { unit } from '../../models/unit';
import { UnitService } from '../../services/unit.service';
<<<<<<< HEAD
import { systems } from '../../models/systems.models';
=======
import { systems } from '../../models/systems';
>>>>>>> 787590e941b422150f54f2aaf47028fb2e508736
import { SystemsService } from '../../services/systems.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css'],
  providers: [systems]
})
export class UnitsComponent implements OnInit {

  public accessKey;
<<<<<<< HEAD
  public idSystem;
  public setpoint;
  public controlvalue;
  public temperatura;
  public setpoint2;
  public temperatura2;
  public controlvalue2;
  public systems:systems = new systems();

  Units;
  SystemsModels = new systems;
  unitModel = new unit ;

    constructor(private UnitService: UnitService, private SystemsService: SystemsService,  private router: Router) {  
    this.accessKey = localStorage.getItem('accessKey');
    //this.idSystem = localStorage.getItem('idSystem');
    //this.idSystem = modelossystem.id;
    
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
      
      this.UnitService.getUnit( this.SystemsModels.idSystem, this.accessKey).subscribe(data=>{

        this.setpoint = data[0].id;
        this.temperatura = data[1].id;
        this.controlvalue = data[2].id;
      
        this.setpoint2 = data[3].id;
        this.temperatura2 = data[4].id;
        this.controlvalue2 = data[5].id;

       localStorage.setItem('setpoint', this.setpoint);
       localStorage.setItem('temperatura', this.temperatura);
       localStorage.setItem('controlvalue', this.controlvalue);
       localStorage.setItem('setpoint2', this.setpoint2);
       localStorage.setItem('temperatura2', this.temperatura2);
       localStorage.setItem('controlvalue2', this.controlvalue2);
=======
  SystemsModels = new systems;
  unitModel = new unit;
  optionsUnits;
  constructor(private UnitService: UnitService, private SystemsService: SystemsService,  private router: Router) {
    this.accessKey = localStorage.getItem('accessKey');
  }

  ngOnInit() {
    this.getSystems();
  }
  getSystems(): void {
    this.SystemsService.getSystems(this.accessKey).subscribe(response => {
      this.SystemsModels.idSystem = response[0].id;
      this.getUnit();
    });
  }
  getUnit(): void {

    this.UnitService.getUnit(this.SystemsModels.idSystem, this.accessKey).subscribe(data => {
>>>>>>> 787590e941b422150f54f2aaf47028fb2e508736
      console.log(data);
      this.optionsUnits = data;
      
    });
  }

  viewData(deviceSelect){
console.log(deviceSelect);
localStorage.setItem('deviceSelect', deviceSelect);
    this.router.navigate(['/Values']);
  }

}


