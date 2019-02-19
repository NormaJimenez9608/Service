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
  public units=[];
  public nameUnit;
  public Devices=[];
  SystemsModels = new systems;
  unitModel = new unit;

  constructor(private UnitService:  UnitService, private SystemsService:  SystemsService, private router: Router) {
    this.accessKey = localStorage.getItem('accessKey');
    this.idSystem = localStorage.getItem('idSystem');
    this.nameUnit= localStorage.getItem('nameUnit')
  }

  ngOnInit() {
    this.getUnit();
  }

  getUnit(): void {

if (this.nameUnit == "Unit"){
  this.Devices.push(
    {name: "GMM"}), 
    this.Devices.push(
     {name: "GHM PAD"})
     }

if (this.nameUnit == "Unit 1"){
this.Devices.push(
  { name: "GMM1"}), 
this.Devices.push(
  { name: "GHM PAD1"})
    }

if (this.nameUnit == "Unit 2"){
 this.Devices.push(
   {name: "GMM2"}), 
  this.Devices.push(
   {name: "GHM PAD2"})
     }
if (this.nameUnit == "Unit 3"){
  this.Devices.push(
    {name: "GMM3"}), 
   this.Devices.push(
    {name: "GHM PAD3"})
      }
 if (this.nameUnit == "Unit 4"){
    this.Devices.push(
      {name: "GMM4"}), 
      this.Devices.push(
    {name: "GHM PAD4"})
       }

console.log(this.Devices)
   // this.UnitService.getUnit(this.idSystem, this.accessKey).subscribe((data: any) => {
    //  this.device = data;
    //  var names = this.device.map(function (person) { return person.deviceName; });
   //   var sorted = names.sort();
    //  var unique = sorted.filter(function (value, index) {
        //  return value !== sorted[index + 1];
    // });
//for (let i in unique) {
  //this.deviNames.push(
   //      {
     //  deviceName: unique[i]
    // })
//}



//console.log(this.deviNames)
this.count=this.Devices.length
    //   for (let i of devicesNames) {
    //     this.concatenadofilter = this.filtrado;
    //     this.filtrado = this.device.filter(device => device.deviceName === i.deviceName);
    //     this.concatenadofilter = this.concatenadofilter.concat(this.filtrado);
    //   }
  // });
  }



  onSelect(name) {

    
    this.nameDevice = name.name
    //console.log([this.nameDevice]);
    localStorage.setItem('nameDevice', this.nameDevice);

  }

}


