import { Component, OnInit } from '@angular/core';
import { systems } from '../../models/systems.models';
import { Login } from '../../models/login'
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-general-header',
  templateUrl: './general-header.component.html',
  styleUrls: ['./general-header.component.css']
})
export class GeneralHeaderComponent implements OnInit {
  public projectName;
  SystemsModel = new systems;
  LoginModel = new Login;
  public IsUserLoginIn;

  public name;
  public username;
  constructor(private router: Router, private logout: LoginService) { }

  ngOnInit() {
    this.name = this.SystemsModel.name;
    this.username = this.LoginModel.username;
  }

  Logout() {

  localStorage.setItem('caselogin', JSON.stringify('false'));
  const caseloginget = JSON.parse(localStorage.getItem('caselogin'));
  this.logout.logout();
  localStorage.clear();
  this.router.navigateByUrl('/');
  }

}

