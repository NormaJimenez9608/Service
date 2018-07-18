import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unit } from '../../models/unit';
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
export class NumunitsComponent implements OnInit {

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


this.count=this.deviNames.length

    //   for (let i of devicesNames) {
    //     this.concatenadofilter = this.filtrado;
    //     this.filtrado = this.device.filter(device => device.deviceName === i.deviceName);
    //     this.concatenadofilter = this.concatenadofilter.concat(this.filtrado);
    //   }
   });
  }
  onSelect(name) {

    
    this.nameDevice = name.deviceName
    //console.log([this.nameDevice]);
    localStorage.setItem('nameDevice', this.nameDevice);

  }

}


