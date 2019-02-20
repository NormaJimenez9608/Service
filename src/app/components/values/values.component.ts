import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import {  values } from '../../models/values';
import { ValuesService } from '../../services/values.service';
import { systems } from '../../models/systems.models';
import { WritteService} from '../../services/writte.service'
import { UnitService} from '../../services/unit.service'
import { Datalog } from '../../models/datalog';
import {Observable} from 'rxjs/Rx'
// import { DESTRUCTION } from 'dns';

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
  public device2= [];
  public concatenadofilter = [];
  public filtrado = [];
  public listdata = [];
  public listdata2 = [];
  public data;
  public data2 = [];
  public listdata3 =[]
  
  public list = [];
  public cero;
  public number;
  public count;
  public idSetpoint;
  SystemsModels = new systems;
  ValuesModel = new values;

  constructor(private ValuesService: ValuesService,  private router:Router, private values1: WritteService, private UnitService: UnitService, ) { 
    
  }

  ngOnInit() {
    this.accessKey = localStorage.getItem('accessKey');
    this.idSystem = localStorage.getItem('idSystem');
    this.nameDevice = localStorage.getItem('nameDevice');
    this.getUnit();
    // let timer = Observable.timer(0, 10000);
    // timer.subscribe(() => this.getValores(this.data, this.number));
    
  }

  getUnit(): void {

      this.UnitService.getUnit(this.idSystem, this.accessKey).subscribe((data: any) => {
      this.device = data;

      for (let i of this.device) {
         this.concatenadofilter = this.filtrado;
         this.filtrado = this.device.filter(device => device.deviceName === this.nameDevice);
         this.concatenadofilter = this.concatenadofilter.concat(this.filtrado);
        }

    var object = {};
    var unicos = this.filtrado.filter(function (e) { 
        return object[e.name] ? false : (object[e.name] = true);
    });
 
    for (let i in unicos) {
      this.listdata.push({
        name: unicos[i].name,
        id: unicos[i].id,
    })
    }
   this.getValues();
 
    })}

 
   getValues(){
    
   this.data2.length=0;
for( let i in this.listdata){

this.ValuesService.getValues( this.idSystem, this.accessKey, this.listdata[i].id ).subscribe((valores:any)=>{
  this.data = valores.id;

  
  this.number= i
  
  this.getValores(this.data, this.number);
   }) 
  
   
   }

 }

 getValores(data1, number):void{
 
  this.data2.length=0;
  this.ValuesService.getValores(this.idSystem, data1, this.accessKey).subscribe((dato:any)=>{

     if (dato == null) {
    //   // console.log('entro')
    //   // let timer = Observable.timer(5000);
    //   // timer.subscribe(() => this.getValores(this.data, this.number));
          this.cero = 'null'
   }else{
       
    this.cero= dato[0].value
     }
      this.data2.push({
        name: this.listdata[number].name,
        id: this.listdata[number].id,   
        value: this.cero,
      }) 
    
  
  this.count= this.data2.length

  for ( let i in this.data2){
  if (this.data2[i].name === "Setpoint"){
    this.idSetpoint= this.data2[i].id
  }
  
  }
 })
 //console.log(this.data2)
  } 

  
    Values(): void{
  const value = this.ValuesModel.value;
   this.values1.Values(this.ValuesModel, this.idSystem, this.accessKey,this.idSetpoint ).subscribe( response=>{
    
   });
 }


  }
