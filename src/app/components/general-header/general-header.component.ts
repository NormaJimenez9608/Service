import { Component, OnInit } from '@angular/core';
import { systems } from '../../models/systems';
import{Login} from '../../models/login'


@Component({
  selector: 'app-general-header',
  templateUrl: './general-header.component.html',
  styleUrls: ['./general-header.component.css']
})
export class GeneralHeaderComponent implements OnInit {
  public projectName;
  SystemsModel = new systems;
  LoginModel = new Login;


  public name;
  public username;
  constructor() { }

  ngOnInit() {

this.name = this.SystemsModel.name;
this.username = this.LoginModel.username;
  }

}

