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
  public table;
  public systems:systems = new systems();



<<<<<<< HEAD
  SystemsModel = new systems;
=======
public SystemsModel = new systems;
>>>>>>> 787590e941b422150f54f2aaf47028fb2e508736

  constructor(private SystemsService: SystemsService)
   {

   }

  ngOnInit() {
    this.accessKey = localStorage.getItem('accessKey');
    this.getSystems();
  }
<<<<<<< HEAD

  getSystems(): void {
    this.SystemsService.getSystems(this.accessKey).subscribe(response => {

      console.log(response) ;
      this.table = response;
     
        this.name = response[0].name,
        this.activated = response [0].activated,
        this.suspended =response[0].suspended,
        this.idSystem = response[0].id,
        this.projectName = response[0].projectName

        this.SystemsModel.idSystem = response[0].id;
        this.SystemsModel.activated= response[0].activated;
        this.SystemsModel.name= response[0].name,
        this.SystemsModel.projectName= response[0].projectName,
        this.SystemsModel.suspended= response[0].suspended
       
      
       localStorage.setItem('idSystem', this.idSystem);
        
      
    });
  }
}


=======
getSystems(): void{

  this.SystemsService.getSystems(this.accessKey).subscribe( response=>{
    
  this.activated = response[0].activated,
  this.name= response[0].name,
  this.projectName= response[0].projectName,
  this.suspended= response[0].suspended,
  this.idSystem = response[0].id

  this.SystemsModel.idSystem = response[0].id;
  this.SystemsModel.activated= response[0].activated;
  this.SystemsModel.name= response[0].name,
  this.SystemsModel.projectName= response[0].projectName,
  this.SystemsModel.suspended= response[0].suspended,

  console.log(this.SystemsModel);

  localStorage.setItem('idSystem', this.idSystem);

});
}
}

>>>>>>> 787590e941b422150f54f2aaf47028fb2e508736
