import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SummaryResolver } from '@angular/compiler';
import { DatalogsService } from '../../services/datalogs.service';
import { Datalog } from '../../models/datalog';
import { DatePipe } from '@angular/common';
import { Graphics } from '../../models/graphics';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { MorrisJsModule } from 'angular-morris-js';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Datalog2 } from '../../models/datalog2';
declare var Morris: any;
declare var $: any;
@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'],
  providers: [Datalog, Graphics]
})
export class GraphicsComponent implements OnInit {
  public accessKey;
  public idSystem;
  public listdata: any[] = [];
  public startDat;
  public endDat;
  public Idvalor;
  public Idvalor2;
  public listdata1: any[] = [];
  public listdata2: any[] = [];
  public listdata3: any[] = [];
  public listdata4: any[] = [];
  public listdata5: any[] = [];
  public name;
  public name2;
  datalog = new Datalog;
  graphics = new Graphics;
  public morris1;

  public nume;
  public y;

  onEnter(valueid, value2id){
    this.getDay(valueid, value2id)
}
  constructor(private DatalogService: DatalogsService, private router: Router, private datePipe: DatePipe) {
    this.accessKey = localStorage.getItem('accessKey');
    this.idSystem = localStorage.getItem('idSystem');
  }

  ngOnInit() {
    this.getDatalogs();

  }
  getDatalogs(): void {
    this.DatalogService.getDatalog(this.idSystem, this.accessKey).subscribe((data: any) => {
      this.listdata = data;
      this.startDat = data[data.length - 1].timestamp
      this.endDat = data[0].timestamp;
      this.graphics.startDate = this.datePipe.transform(this.startDat, 'yyyy-MM-dd');
      this.graphics.endDate = this.datePipe.transform(this.endDat, 'yyyy-MM-dd')

      this.onChange(data[0].id);
      this.onChange2(data[0].id);
      this.getGraphics();
    })
  }

  onChange(valueid ) {

    this.Idvalor = valueid;
    this.listdata1.length = 0;
    this.listdata2.length = 0;
    this.listdata4.length = 0
    // this.name = valuename
    this.getData();
    
console.log(this.name)
  }
  onChange2(value2id, ) {

    this.Idvalor2 = value2id;
    this.listdata1.length = 0;
    this.listdata2.length = 0;
    this.listdata4.length = 0
    
    this.getData();
    // this.name2 = valuename2
    console.log(this.name2)
  }


  getData() {
    if (this.Idvalor && this.Idvalor2) {

      this.DatalogService.getDetailDay(this.idSystem, this.Idvalor, this.accessKey).subscribe((data: any) => {
        

        for (let i in data) {
          this.listdata2.push({
            timestamp: data[i].timestamp,
            value: data[i].maxValue,
          })
        }
        

        this.DatalogService.getDetailDay(this.idSystem, this.Idvalor2, this.accessKey).subscribe((data2: any) => {
          

          for (let i in data2) {
            this.listdata1.push({
              timestamp: data2[i].timestamp,
              value2: data2[i].maxValue
            })
          }

          console.log(this.listdata2.length, this.listdata1.length);
          if (this.listdata2.length < this.listdata1.length) {
            this.startDat = data2[data2.length - 1].timestamp
           this.endDat = data2[0].timestamp;
            for (let i in this.listdata1) {
              
              if (data[i] == null) {
                data[i] = {
                  maxValue: "0",
                }
              }
              this.listdata4.push({
                timestamp: data2[i].timestamp,
                value: data[i].maxValue,
                value2: data2[i].maxValue
              })
            }
          }
          else {
            for (let i in this.listdata2) {
              this.startDat = data[data2.length - 1].timestamp
              this.endDat = data[0].timestamp;
              if (data2[i] == null) {
                data2[i] = {
                  maxValue: "0",
                }
              }
              this.listdata4.push({
                timestamp: data[i].timestamp,
                value: data[i].maxValue,
                value2: data2[i].maxValue
              })
            }
          }
          this.graphics.startDate = this.datePipe.transform(this.startDat, 'yyyy-MM-dd');
           this.graphics.endDate = this.datePipe.transform(this.endDat, 'yyyy-MM-dd')
          console.log('hola', this.listdata4);
          this.morris1.setData(this.listdata4)
        })
      })
    }
  }

  getDay(valueid, value2id) {
    this.listdata1.length = 0;
    this.listdata2.length = 0;
    this.listdata4.length = 0;
    const endDate = this.graphics.endDate;
    const startDate = this.graphics.startDate;
    console.log(endDate)
    this.DatalogService.getDetailDay2(this.idSystem, this.Idvalor, this.accessKey, this.graphics.startDate, this.graphics.endDate).subscribe((data4: any) => {
      console.log(data4);
      for (let i in data4) {
        this.listdata2.push({
          timestamp: data4[i].timestamp,
          value: data4[i].maxValue,
        })
      }
      
    
    this.DatalogService.getDetailDay2(this.idSystem, this.Idvalor2, this.accessKey, this.graphics.startDate, this.graphics.endDate).subscribe((data3: any) => {
      this.listdata3 = data3;
      console.log(data3)
      for (let i in data3) {
        this.listdata1.push({
          timestamp: data3[i].timestamp,
          value2: data4[i].maxValue
        })
      }
      if (this.listdata2.length < this.listdata1.length) {
        for (let i in this.listdata1) {
              
          if (data4[i] == null) {
            data4[i] = {
              maxValue: "0",
            }
          }
          this.listdata4.push({
            timestamp: data3[i].timestamp,
            value: data3[i].maxValue,
            value2: data3[i].maxValue
          })
        }
      }
      else {
        for (let i in this.listdata2) {
          
          if (data3[i] == null) {
            data3[i] = {
              maxValue: "0",
            }
          }
          this.listdata4.push({
            timestamp: data4[i].timestamp,
            value: data4[i].maxValue,
            value2: data3[i].maxValue
          })
        }
        
      }
      this.morris1.setData(this.listdata4)
      console.log(this.listdata4)
    })
  })
  }
  getGraphics() {

    this.morris1 = new Morris.Line({
      element: 'line-chart',
      data: this.listdata4,
      xkey: 'timestamp',
      ykeys: ['value', 'value2'],
      
      labels: ['Value 1', 'Value 2'],
      resize: true,
      lineColors: ['#DA434C', '#696666'],
    });
    console.log(this.listdata4)

  }
}

