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

  constructor(private SystemsService: SystemsService, private router:Router) {

  }

  ngOnInit() {
    this.accessKey = localStorage.getItem('accessKey');
    this.getSystems();
  }

  getSystems(): void {
    this.SystemsService.getSystems(this.accessKey).subscribe((response: any) => {

    
      this.table= response;
         this.projectName = response[0].projectName

        
    });
}
onSelect(data) {

  
  this.idSystem= data.id
  localStorage.setItem('idSystem', this.idSystem);
  this.router.navigate(['Systems/Devices']); 
}
}

