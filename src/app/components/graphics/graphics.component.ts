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
      this.datalog.startDate = this.datePipe.transform(this.startDat, 'yyyy-MM-dd');
      this.datalog.endDate = this.datePipe.transform(this.endDat, 'yyyy-MM-dd')

      this.onChange(data[0].id);
      this.onChange2(data[0].id);
      this.getGraphics();
    })
  }

  onChange(valueid) {

    this.Idvalor = valueid;
    this.listdata1.length = 0;
    this.listdata2.length = 0;
    this.listdata4.length = 0
    this.getData();
    

  }
  onChange2(value2id) {

    this.Idvalor2 = value2id;
    this.listdata1.length = 0;
    this.listdata2.length = 0;
    this.listdata4.length = 0
    this.getData();
    this.name=this.graphics.name;
    this.name2=this.graphics.name2;
  }


  getData() {
    if (this.Idvalor && this.Idvalor2) {

      this.DatalogService.getDetailDay(this.idSystem, this.Idvalor, this.accessKey).subscribe((data: any) => {
        console.log(data);

        for (let i in data) {
          this.listdata2.push({
            timestamp: data[i].timestamp,
            value: data[i].maxValue,
          })
        }
        console.log(this.listdata2)

        this.DatalogService.getDetailDay(this.idSystem, this.Idvalor2, this.accessKey).subscribe((data2: any) => {
          console.log(data2);

          for (let i in data2) {
            this.listdata1.push({
              timestamp: data2[i].timestamp,
              value2: data2[i].maxValue
            })
          }

          console.log(this.listdata2.length, this.listdata1.length);
          if (this.listdata2.length < this.listdata1.length) {
            for (let i in this.listdata1) {
              console.log(i);
if(data[i]==null)
{
console.log('entro?');
  data[i]={
    maxValue : "0",
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
            for (let i in this.listdata1) {
              this.listdata4.push({
                timestamp: data2[i].timestamp,
                value: data[i].maxValue,
                value2: data2[i].maxValue
              })
            }
          }

          console.log('hola', this.listdata4);

          
          this.morris1.setData(this.listdata4)
        })
      })
    }
  }

  getDay(valueid, value2id) {
    const endDate = this.datalog.endDate;
    const startDate = this.datalog.startDate;
    console.log(endDate)
    this.DatalogService.getDetailDay2(this.idSystem, this.Idvalor, this.accessKey, this.datalog.startDate, this.datalog.endDate).subscribe((data4: any) => {
      console.log(data4);

    })
    this.DatalogService.getDetailDay2(this.idSystem, this.Idvalor2, this.accessKey, this.datalog.startDate, this.datalog.endDate).subscribe((data3: any) => {
      this.listdata3 = data3;
      console.log(data3)
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
      lineColors: ['#C14D9F', '#2CB4AC'],
    });
    console.log(this.listdata4)

  }
}

