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
path: 'contact',
component: ContactComponent      
    },
    {
      path: 'Service',
      component: ConservicesComponent
    },
    {
      path: 'Sales',
      component: ConsalesComponent
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
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
