import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import {  values } from '../../models/values';
import { ValuesService } from '../../services/values.service';
import { systems } from '../../models/systems.models';
import { WritteService} from '../../services/writte.service'
import { UnitService} from '../../services/unit.service'

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css'],
  providers: [values]
})
export class ValuesComponent implements OnInit {
  public nameDevice;
  public accessKey;
  public idSystem;
  public device;
  public concatenadofilter = [];
  public filtrado = [];
  public listdata = [];
  public listdata2 = [];
  public data: any[] = [];
  public list = [];

  SystemsModels = new systems;
  ValuesModel = new values;

  constructor(private ValuesService: ValuesService,  private router:Router, private values1: WritteService, private UnitService: UnitService) { 
    
  }

  ngOnInit() {
    this.accessKey = localStorage.getItem('accessKey');
    this.idSystem = localStorage.getItem('idSystem');
    this.nameDevice = localStorage.getItem('nameDevice');
    this.getUnit();
   
  }

  getUnit(): void {

    this.UnitService.getUnit(this.idSystem, this.accessKey).subscribe((data: any) => {
      this.device = data;

      for (let i of this.device) {
           this.concatenadofilter = this.filtrado;
         this.filtrado = this.device.filter(device => device.deviceName === this.nameDevice);
         this.concatenadofilter = this.concatenadofilter.concat(this.filtrado);
        }
console.log(this.filtrado);
// var names = this.filtrado.map(function (name) { return name.name; });
//       var sorted = names.sort();
//       var unique = sorted.filter(function (value, index) {
//           return value !== sorted[index + 1];
//       });

var persona = {};
    var unicos = this.filtrado.filter(function (e) { 
        return persona[e.name] ? false : (persona[e.name] = true);
    });
    console.log(unicos);
 
    for (let i in unicos) {
      this.listdata.push({
        name: unicos[i].name,
        id: unicos[i].id,
    })
    }
    console.log(this.listdata)

   this.getValues();
    })}

 
   getValues(): void{
for( let i in this.listdata){
this.ValuesService.getValues( this.idSystem, this.accessKey, this.listdata[i].id ).subscribe((valores:any)=>{
  this.data.push({
    id2: valores.id})
   }) 
   }
   console.log(this.data)
   this.getValores();
 }

  getValores():void{
    // falta hacer que el data[], sea un arreglo con numero para proseguir. 
    
    for( let i in this.data){
    
  this.ValuesService.getValores(this.idSystem, this.data[i], this.accessKey).subscribe((dato:any)=>{
  console.log(dato); 

 })
}
  } 

//  Values(): void{
//   const value = this.ValuesModel.value;
  
//   this.values1.Values(this.idSystem, this.accessKey,  ).subscribe( response=>{
//    console.log(response);
//   });
// }
  }
