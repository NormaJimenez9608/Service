import { Component, OnInit } from '@angular/core';
import { systems } from '../../models/systems';


@Component({
  selector: 'app-general-header',
  templateUrl: './general-header.component.html',
  styleUrls: ['./general-header.component.css']
})
export class GeneralHeaderComponent implements OnInit {
  public projectName;
  SystemsModel = new systems;
  public name;
  constructor() { }

  ngOnInit() {
console.log(this.SystemsModel.name);
this.name = this.SystemsModel.name;

  }

}

