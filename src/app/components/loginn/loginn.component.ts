import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import { DYNAMIC_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {

  constructor(private router: Router) { 

  }

  ngOnInit() {
  }
  
  loginUser(e) {
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    
    if (username == 'Norma' && password == 'Luis' ){
this.router.navigate(['inicio']);
    }
    console.log (username, password);
    return false;

  }
}
