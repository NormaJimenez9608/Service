import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import {Http, HttpModule} from '@angular/http'
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginnComponent } from './components/loginn/loginn.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConservicesComponent } from './components/conservices/conservices.component';
import { ConsalesComponent } from './components/consales/consales.component';
import { ImagelogginComponent } from './components/imageloggin/imageloggin.component';
import { GeneralHeaderComponent } from './components/general-header/general-header.component';
import { UnitsComponent } from './components/units/units.component';
import { NumunitsComponent } from './components/numunits/numunits.component';
import { PagevaluesComponent } from './components/pagevalues/pagevalues.component';
import { ValuesComponent } from './components/values/values.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoginService} from './services/login.service';
import {SystemsService} from './services/systems.service';
import {UnitService} from './services/unit.service';
import {ValuesService} from './services/values.service';
import { Values2Component } from './components/values2/values2.component';
import { Pagevalues2Component } from './components/pagevalues2/pagevalues2.component';
import {WritteService} from './services/writte.service';
import { AlarmsComponent } from './components/alarms/alarms.component';
import { AlarmsHistoryComponent } from './components/alarms-history/alarms-history.component';
import { DatalogComponent } from './components/datalog/datalog.component';
import { DataloghoursComponent } from './components/dataloghours/dataloghours.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import {AlarmsService} from './services/alarms.service';
import {ExcelService}from './services/excel.service';
import {AuthGuardGuard} from './auth-guard.guard'

const appRoutes: Routes = [
  {
    path: '',
    component: LoginnComponent
  },
  { 
     path: 'Main',
     canActivate: [AuthGuardGuard],
     component: InicioComponent, 
      
},
    {
      path: 'Service',
      canActivate: [AuthGuardGuard],
      component: ConservicesComponent
    },
    {
      path: 'Sales',
      component: ConsalesComponent
    },
   
  {
    path:'Units',
    canActivate: [AuthGuardGuard],
    component: UnitsComponent,
  },
  {
    path: 'Values',
    canActivate: [AuthGuardGuard],
    component: PagevaluesComponent
  },
  {
    path: 'Values2',
    canActivate: [AuthGuardGuard],
    component: Pagevalues2Component
  },

{
  path: 'Alarms',
  canActivate: [AuthGuardGuard],
     component: AlarmsComponent
   },
   {
     path: 'AlarmsHistory',
     canActivate: [AuthGuardGuard],
     component: AlarmsHistoryComponent
   }, 
  { path: 'Datalog',
  canActivate: [AuthGuardGuard],
   component: DatalogComponent
 },
 {
   path: 'DatalogHours',
   canActivate: [AuthGuardGuard],
   component: DataloghoursComponent
 },
 {
 path: 'Graphics',
 canActivate: [AuthGuardGuard],
 component: GraphicsComponent
 }
] 

@NgModule({
  declarations: [
    AppComponent,
    LoginnComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ContactComponent,
    ConservicesComponent,
    ConsalesComponent,
    ImagelogginComponent,
    GeneralHeaderComponent,
    UnitsComponent,
    NumunitsComponent,
    PagevaluesComponent,
    ValuesComponent,
    Values2Component,
    Pagevalues2Component,
    AlarmsComponent,
    AlarmsHistoryComponent,
    DatalogComponent,
    DataloghoursComponent,
    GraphicsComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule  
  ],
  providers: [LoginService,  SystemsService, UnitService, ValuesService, WritteService, AlarmsService, ExcelService, AuthGuardGuard ],
  bootstrap: [AppComponent],

})
export class AppModule { }
