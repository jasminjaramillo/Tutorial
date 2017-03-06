import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroeDetalleComponent } from './heroe-detalle.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroesComponent }     from './heroes.component';


const appRoutes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    HeroeDetalleComponent,
    DashboardComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
