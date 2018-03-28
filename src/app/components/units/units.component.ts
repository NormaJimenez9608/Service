import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { unit } from '../../models/unit';
import { UnitService } from '../../services/unit.service';
import { systems } from '../../models/systems';
import { SystemsService } from '../../services/systems.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  public accessKey;
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


