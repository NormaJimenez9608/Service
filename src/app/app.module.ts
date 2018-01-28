import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginnComponent } from './components/loginn/loginn.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import{  RouterModule, Routes } from '@angular/router';
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


const appRoutes: Routes = [
  {
    path: '',
    component: LoginnComponent
  },
  { 
     path: 'inicio',
  component: InicioComponent
},
    {
      path: 'Service',
      component: ConservicesComponent
    },
    {
      path: 'Sales',
      component: ConsalesComponent
    },
   { path: 'Units',
    component: UnitsComponent
  },
  {
    path: 'Values',
    component: PagevaluesComponent
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
   
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
