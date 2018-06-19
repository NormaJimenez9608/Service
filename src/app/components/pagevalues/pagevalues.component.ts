import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagevalues',
  templateUrl: './pagevalues.component.html',
  styleUrls: ['./pagevalues.component.css']
})
export class PagevaluesComponent implements OnInit {
  public nameDevice;
  constructor() { 
    this.nameDevice = localStorage.getItem('nameDevice');
  }


  ngOnInit() {
  }

}
