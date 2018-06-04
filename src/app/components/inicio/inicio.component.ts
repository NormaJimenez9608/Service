import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { systems } from '../../models/systems.models';
import { SystemsService } from '../../services/systems.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],

  providers: [systems]
})
export class InicioComponent implements OnInit {
  public accessKey;
  public activated;
  public name;
  public projectName;
  public suspended;
  public idSystem;
  public table: any[] =[];
  public systems: systems = new systems();


  SystemsModel = new systems;

  constructor(private SystemsService: SystemsService) {

  }

  ngOnInit() {
    this.accessKey = localStorage.getItem('accessKey');
    this.getSystems();
  }

  getSystems(): void {
    this.SystemsService.getSystems(this.accessKey).subscribe((response: any) => {

      console.log(response);
      this.table= response;

      //     this.name = response[0].name,
      //     this.activated = response[0].activated,
      //     this.suspended = response[0].suspended,
        this.idSystem = response[0].id,
      //     this.projectName = response[0].projectName

        this.SystemsModel.idSystem = response[0].id;
      //     this.SystemsModel.activated = response[0].activated;
      //     this.SystemsModel.name = response[0].name,
      //     this.SystemsModel.projectName = response[0].projectName,
      //     this.SystemsModel.suspended = response[0].suspended

        localStorage.setItem('idSystem', this.idSystem);

      
    });
  }
}



