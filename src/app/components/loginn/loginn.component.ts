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
  
  constructor(private username:LoginService, private router:Router ) { 

  }
  ngOnInit() {
  }

  Login(){
const username = this.login.username;
const password = this.login.password;

this.username.Login(this.login).subscribe( response=>{
  
  this.router.navigate(['Main']); 
}, error=>{
  this.router.navigate(['']);
  alert("Usuario o contraseña incorrecta");
});
}

}

