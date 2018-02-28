import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import {  systems } from '../../models/systems';
import { SystemsService } from '../../services/systems.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public accessKey;
  public activated;
  public name;
  public projectName;
  public suspended;

SystemsModel = new systems;

  constructor(private SystemsService: SystemsService) { }

  ngOnInit() {
    this.accessKey = localStorage.getItem('accessKey');
    this.getSystems();
  }
getSystems(): void{
  console.log('Entro a revision getSystems');
this.SystemsService.getSystems().subscribe((response: any)=>{
  console.log(response[0].activated);
  console.log(response[0].name);
  console.log(response[0].projectName);
  console.log(response[0].suspended);
  this.activated = response[0].activated;
  this.name= response[0].name;
  this.projectName= response[0].projectName;
  this.suspended= response[0].suspended;
this.SystemsModel.name=response[0].name;
}
);
}
}






