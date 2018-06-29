import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import { DYNAMIC_TYPE } from '@angular/compiler/src/output/output_ast';
import {  Login } from '../../models/login';
import { LoginService } from '../../services/login.service';




@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css'
  ], 
  providers: [Login]
  
})

export class LoginnComponent implements OnInit {
  login = new Login();
  public accesKeyTest;
  onEnter(){
      this.Login()
  }
  constructor(private username:LoginService, private router:Router ) { 
    
  }
  ngOnInit() {
    this.verificarsesion();
  }
  verificarsesion() {
    const caselogin =localStorage.getItem('caselogin');
  }
  Login(){
const username = this.login.username;
const password = this.login.password;

this.username.Login(this.login).subscribe( response=>{
  localStorage.setItem('caselogin', JSON.stringify('true'));

  this.router.navigate(['Systems']); 
}, error=>{

  localStorage.setItem('caselogin', JSON.stringify('false'));

  this.router.navigate(['']);
  alert("Usuario o contraseña incorrecta");
});
}

}

