import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import { DYNAMIC_TYPE } from '@angular/compiler/src/output/output_ast';
import {  Login } from '../../models/login';
//Aqui se importa 
//En los conceptos basicos del documento de drive se dice como generar el servicio, y como generar el modelo 
@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css'
  ], 
  providers: [Login]
  
})
export class LoginnComponent implements OnInit {
  login = new Login();
//dentro de los parentesis se declara lo del constructor 
  constructor(private username:Login) { 

  }
  ngOnInit() {
  }
  //aqui se declaran nuevas funciones como la de login(){}

  Login(){
const username = this.login.username;
const password = this.login.password;
if(username == 'Guentner' && password == '123'){
console.log('succes' +username);
}
else{
alert('false'+ username);
}
  }
}
