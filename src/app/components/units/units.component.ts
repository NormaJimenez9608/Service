import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { unit } from '../../models/unit';
import { UnitService } from '../../services/unit.service';


@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css'],
  providers: []
})
export class UnitsComponent implements OnInit {

  public accessKey;
  public idSystem;
  public setpoint;
  public controlvalue;
  public temperatura;
  public setpoint2;
  public temperatura2;
  public controlvalue2;
 

  Units;
 
  unitModel = new unit ;

    constructor(private UnitService: UnitService, private router: Router) {  
    this.accessKey = localStorage.getItem('accessKey');
    this.idSystem = localStorage.getItem('idSystem');
 
    
 }

 ngOnInit() {
  this.getUnit();
}
  getUnit(): void{
      
      this.UnitService.getUnit( this.idSystem, this.accessKey).subscribe(data=>{

        this.setpoint = data[0].id;
        this.temperatura = data[1].id;
        this.controlvalue = data[2].id;
      
        this.setpoint2 = data[3].id;
        this.temperatura2 = data[4].id;
        this.controlvalue2 = data[5].id;

       localStorage.setItem('setpoint', this.setpoint);
       localStorage.setItem('temperatura', this.temperatura);
       localStorage.setItem('controlvalue', this.controlvalue);
       localStorage.setItem('setpoint2', this.setpoint2);
       localStorage.setItem('temperatura2', this.temperatura2);
       localStorage.setItem('controlvalue2', this.controlvalue2);
      console.log(data);
      
      
    });
  }

  viewData(deviceSelect){
console.log(deviceSelect);
localStorage.setItem('deviceSelect', deviceSelect);
    this.router.navigate(['/Values']);
  }

}


