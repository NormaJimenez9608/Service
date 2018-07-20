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
import { IfObservable } from 'rxjs/observable/IfObservable';
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
  public listdata1: any[] = [];
  public listdata2: any[] = [];
  public listdata3: any[] = [];
  public listdata4: any[] = [];
  public listdata5: any[] = [];
  public listdata6: any[] = [];
  public startDat;
  public endDat;
  public name1;
  public name2;
  public name3;
  public name4;
  public name5;
  public Idvalor;
  public Idvalor2;
  public Idvalor3;
  public Idvalor4;
  public Idvalor5;
  public morris1;
  datalog = new Datalog;
  graphics = new Graphics;
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
      this.onChange2(this.listdata[0].id);
      this.onChange3(this.listdata[0].id);
      this.onChange4(this.listdata[0].id);
      this.onChange5(this.listdata[0].id);
      this.getGraphics();
    })
  }
  onChange(valueid) {
    for (let i in this.listdata) {
      if (valueid === this.listdata[i].id)
        this.name1 = this.listdata[i].name
    }
    this.Idvalor = valueid;
    this.getClean();
    this.getData(this.Idvalor, this.Idvalor2, this.Idvalor3, this.Idvalor4, this.Idvalor5);
  }
  onChange2(value2id, ) {
    for (let i in this.listdata) {
      if (value2id === this.listdata[i].id)
        this.name2 = this.listdata[i].name
    }
    this.Idvalor2 = value2id;
    this.getClean();
    this.getData(this.Idvalor, this.Idvalor2, this.Idvalor3, this.Idvalor4, this.Idvalor5);
    
  }
  onChange3(value3id) {
    for (let i in this.listdata) {
      if (value3id === this.listdata[i].id)
        this.name3 = this.listdata[i].name
    }
    this.Idvalor3 = value3id;
    this.getClean();
    this.getData(this.Idvalor, this.Idvalor2, this.Idvalor3, this.Idvalor4, this.Idvalor5);
  }
  onChange4(value4id, ) {
    for (let i in this.listdata) {
      if (value4id === this.listdata[i].id)
        this.name4 = this.listdata[i].name
    }
    this.Idvalor4 = value4id;
    this.getClean();
    this.getData(this.Idvalor, this.Idvalor2, this.Idvalor3, this.Idvalor4, this.Idvalor5);
  }
  onChange5(value5id, ) {
    for (let i in this.listdata) {
      if (value5id === this.listdata[i].id)
        this.name5 = this.listdata[i].name
    }
    this.Idvalor5 = value5id;
    this.getClean();
    this.getData(this.Idvalor, this.Idvalor2, this.Idvalor3, this.Idvalor4, this.Idvalor5);
  }

  getData(idValor, IdValor2, IdValor3, IdValor4, IdValor5) {
   if( this.Idvalor, this.Idvalor2, this.Idvalor3, this.Idvalor4, this.Idvalor5){
      this.DatalogService.getDetailDay(this.idSystem, idValor, this.accessKey).subscribe((data: any) => {
        for (let i in data) {
          this.listdata1.push({
            timestamp: data[i].timestamp,
            value: data[i].maxValue,
          })
        }
     
     this.DatalogService.getDetailDay(this.idSystem, IdValor2, this.accessKey).subscribe((data2: any) => {
          for (let i in data2) {
            this.listdata2.push({
              timestamp: data2[i].timestamp,
              value2: data2[i].maxValue
            })
          } 
     this.DatalogService.getDetailDay(this.idSystem, IdValor3, this.accessKey).subscribe((data3: any) => {
            for (let i in data3) {
              this.listdata3.push({
                timestamp: data3[i].timestamp,
                value3: data3[i].maxValue
              })
            } 
     this.DatalogService.getDetailDay(this.idSystem, IdValor4, this.accessKey).subscribe((data4: any) => {
              for (let i in data4) {
                this.listdata4.push({
                  timestamp: data4[i].timestamp,
                  value4: data4[i].maxValue
                })
              }
     this.DatalogService.getDetailDay(this.idSystem, IdValor5, this.accessKey).subscribe((data5: any) => {
                for (let i in data5) {
                  this.listdata5.push({
                    timestamp: data5[i].timestamp,
                    value5: data5[i].maxValue
                  })
                }
              
           //     console.log(this.listdata1.length, this.listdata2.length )
    //  console.log(this.listdata1, this.listdata2, this.listdata3, this.listdata4, this.listdata5)
    //  console.log(this.listdata1.length, this.listdata2.length)
      if(this.listdata1.length > this.listdata2.length ){
        this.startDat = this.listdata1[this.listdata1.length - 1].timestamp
        this.endDat = this.listdata1[0].timestamp;
        for(let i in this.listdata1){
          if (this.listdata2[i] == null) {
           this.listdata2[i] = {
              maxValue: "0",
            }
          }
          if (this.listdata3[i] == null) {
            this.listdata3[i] = {
               maxValue: "0",
             }
           }
           if (this.listdata4[i] == null) {
            this.listdata4[i] = {
               maxValue: "0",
             }
           }
           if (this.listdata5[i] == null) {
            this.listdata5[i] = {
               maxValue: "0",
             }
           }
          
            this.listdata6.push({
              timestamp:this.listdata1[i].timestamp,
              value: this.listdata1[i].value,
              value2: this.listdata2[i].value2,
              value3: this.listdata3[i].value3,
              value4: this.listdata4[i].value4,
              value5: this.listdata5[i].value5, 
            })
          
        }
      }
      else{
        this.startDat = this.listdata2[this.listdata2.length - 1].timestamp
        this.endDat = this.listdata2[0].timestamp;
        for (let i in this.listdata2) {
          if (this.listdata1[i] == null) {
            this.listdata1[i] = {
               maxValue: "0",
             }
           }
           if (this.listdata3[i] == null) {
             this.listdata3[i] = {
                maxValue: "0",
              }
            }
            if (this.listdata4[i] == null) {
             this.listdata4[i] = {
                maxValue: "0",
              }
            }
            if (this.listdata5[i] == null) {
             this.listdata5[i] = {
                maxValue: "0",
              }
            }
            this.listdata6.push({
              timestamp:this.listdata2[i].timestamp,
              value: this.listdata1[i].value,
              value2: this.listdata2[i].value2,
              value3: this.listdata3[i].value3,
              value4: this.listdata4[i].value4,
              value5: this.listdata5[i].value5, 
            })
         } 
       }  
       this.graphics.startDate = this.datePipe.transform(this.startDat, 'yyyy-MM-dd');
       this.graphics.endDate = this.datePipe.transform(this.endDat, 'yyyy-MM-dd')        
       this.morris1.setData(this.listdata6)
       this.morris1.options.labels =[this.name1, this.name2, this.name3, this.name4, this.name5]

      // console.log(this.listdata6) 
        })
       })
     })
   })
 })    
}  }
  getClean(){
    this.listdata1.length =0;
    this.listdata2.length=0;
    this.listdata3.length=0;
    this.listdata4.length=0;
    this.listdata5.length=0;
    this.listdata6.length=0;
  }
  getGraphics() {

    this.morris1 = new Morris.Line({
      element: 'line-chart',
      data: this.listdata6,
      xkey: 'timestamp',
      ykeys: ['value', 'value2', 'value3', 'value4', 'value5'],
      labels: [this.name1, this.name2, this.name3, this.name4, this.name5],
      resize: true,
      lineColors: ['#DA434C', '#696666', '#F94207', '#CDC403', '#04779E'],
    });
  //  console.log(this.listdata4)

  }


  getDay(valueid, value2id, value3id, value4id, value5id) {
    console.log(this.Idvalor, this.Idvalor2, this.Idvalor3, this.Idvalor4, this.Idvalor5)
    this.getClean();
    const endDate = this.graphics.endDate;
    const startDate = this.graphics.startDate;
    this.DatalogService.getDetailDay2(this.idSystem, this.Idvalor, this.accessKey, startDate, endDate).subscribe((data6: any) => {
       // console.log(data6);
        for (let i in data6) {
          this.listdata1.push({
            timestamp: data6[i].timestamp,
            value: data6[i].maxValue,
          })
        }
    this.DatalogService.getDetailDay2(this.idSystem, this.Idvalor2, this.accessKey, startDate, endDate).subscribe((data7: any) => {
           // console.log(data7);
            for (let i in data7) {
              this.listdata2.push({
                timestamp: data7[i].timestamp,
                value: data7[i].maxValue,
              })
            }
    this.DatalogService.getDetailDay2(this.idSystem, this.Idvalor3, this.accessKey, startDate, endDate).subscribe((data8: any) => {
            //    console.log(data8);
                for (let i in data8) {
                  this.listdata3.push({
                    timestamp: data8[i].timestamp,
                    value: data8[i].maxValue,
                  })
                }
    this.DatalogService.getDetailDay2(this.idSystem, this.Idvalor4, this.accessKey, startDate, endDate).subscribe((data9: any) => {
             //       console.log(data9);
                    for (let i in data9) {
                      this.listdata4.push({
                        timestamp: data9[i].timestamp,
                        value: data9[i].maxValue,
                      })
                    }
    this.DatalogService.getDetailDay2(this.idSystem, this.Idvalor5, this.accessKey, startDate, endDate).subscribe((data10: any) => {
                 //       console.log(data10);
                        for (let i in data10) {
                          this.listdata5.push({
                            timestamp: data10[i].timestamp,
                            value: data10[i].maxValue,
                          })
                        }
      console.log(this.listdata1, this.listdata2, this.listdata3, this.listdata4, this.listdata5)
      console.log(this.listdata1.length, this.listdata2.length)

                if(this.listdata1.length > this.listdata2.length ){
                          this.startDat = this.listdata1[this.listdata1.length - 1].timestamp
                          this.endDat = this.listdata1[0].timestamp;
                          for(let i in this.listdata1){
                            if (this.listdata2[i] == null) {
                             this.listdata2[i] = {
                                maxValue: "0",
                              }
                            }
                            if (this.listdata3[i] == null) {
                              this.listdata3[i] = {
                                 maxValue: "0",
                               }
                             }
                             if (this.listdata4[i] == null) {
                              this.listdata4[i] = {
                                 maxValue: "0",
                               }
                             }
                             if (this.listdata5[i] == null) {
                              this.listdata5[i] = {
                                 maxValue: "0",
                               }
                             }
                            
                              this.listdata6.push({
                                timestamp:this.listdata1[i].timestamp,
                                value: this.listdata1[i].value,
                                value2: this.listdata2[i].value2,
                                value3: this.listdata3[i].value3,
                                value4: this.listdata4[i].value4,
                                value5: this.listdata5[i].value5, 
                              })
                            
                          }
                        }
                        else{
                          console.log('hola')
                          this.startDat = this.listdata2[this.listdata2.length - 1].timestamp
                          this.endDat = this.listdata2[0].timestamp;
                          for (let i in this.listdata2) {
                            if (this.listdata1[i] == null) {
                              this.listdata1[i] = {
                                 maxValue: "0",
                               }
                             }
                             if (this.listdata3[i] == null) {
                               this.listdata3[i] = {
                                  maxValue: "0",
                                }
                              }
                              if (this.listdata4[i] == null) {
                               this.listdata4[i] = {
                                  maxValue: "0",
                                }
                              }
                              if (this.listdata5[i] == null) {
                               this.listdata5[i] = {
                                  maxValue: "0",
                                }
                              }
                              this.listdata6.push({
                                timestamp:this.listdata2[i].timestamp,
                                value: this.listdata1[i].value,
                                value2: this.listdata2[i].value2,
                                value3: this.listdata3[i].value3,
                                value4: this.listdata4[i].value4,
                                value5: this.listdata5[i].value5, 
                              })
                           } 
                         }  
                        console.log(this.listdata6)
                         this.morris1.setData(this.listdata6)
                         this.morris1.options.labels =[this.name1, this.name2, this.name3, this.name4, this.name5]

                      }) 
                  }) 
              }) 
          }) 
      })  
  }
}

