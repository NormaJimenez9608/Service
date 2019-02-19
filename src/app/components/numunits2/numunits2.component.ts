import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unit } from '../../models/unit';
import { UnitService } from '../../services/unit.service';
import { systems } from '../../models/systems.models';
import { SystemsService } from '../../services/systems.service';
import { SummaryResolver } from '@angular/compiler';

@Component({
  selector: 'app-numunits2',
  templateUrl: './numunits2.component.html',
  styleUrls: ['./numunits2.component.css'],
  providers: [systems]
})
export class Numunits2Component implements OnInit {

  public accessKey;
  public idSystem;
  public nameDevice;
  public systems: systems = new systems();
  public number;
  public names: any[] = [];
  public deviNames: any[] = [];
  public device;
  public filtrado = [];
  public concatenadofilter = [];
  public count: number;
  public units=[];
  SystemsModels = new systems;
  unitModel = new unit;

  constructor(private UnitService:  UnitService, private SystemsService:  SystemsService, private router: Router) {
    this.accessKey = localStorage.getItem('accessKey');
    this.idSystem = localStorage.getItem('idSystem');
  }

  ngOnInit() {
    this.getUnit();
  }

  getUnit(): void {

    this.UnitService.getUnit(this.idSystem, this.accessKey).subscribe((data: any) => {
      this.device = data;
      var names = this.device.map(function (person) { return person.deviceName; });
      var sorted = names.sort();
      var unique = sorted.filter(function (value, index) {
          return value !== sorted[index + 1];
      });

for (let i in unique) {
  this.deviNames.push(
         {
       deviceName: unique[i]
     })
}

for(let i in this.deviNames){
  if (this.deviNames[i].deviceName == "GHM Pad") {
    this.units.push(
      {unit: "Unit"
    })}
  if (this.deviNames[i].deviceName == "GHM Pad1") {
    this.units.push(
      {unit: "Unit 1"
    })}
  if (this.deviNames[i].deviceName == "GHM Pad2") {
      this.units.push(
        {unit: "Unit 2"
      }) }
  if (this.deviNames[i].deviceName == "GHM Pad3") {
        this.units.push(
          {unit: "Unit 3"
        })}
  if (this.deviNames[i].deviceName == "GHM Pad4") {
          this.units.push(
            {unit: "Unit 4"
          }) 
        }
}
//console.log(this.units)
//console.log(this.deviNames)
this.count=this.units.length

    //   for (let i of devicesNames) {
    //     this.concatenadofilter = this.filtrado;
    //     this.filtrado = this.device.filter(device => device.deviceName === i.deviceName);
    //     this.concatenadofilter = this.concatenadofilter.concat(this.filtrado);
    //   }
   });
  }
  onSelect(name) {

    
    this.nameDevice = name.unit
   // console.log([this.nameDevice]);
    localStorage.setItem('nameUnit', this.nameDevice);

  }

}
