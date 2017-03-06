import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
     <h1>{{titulo}}</h1>
     <a routerLink="/heroes">Heroes</a>
     <router-outlet></router-outlet>
   `
})
export class AppComponent {
  titulo = 'Tour of Heroes';
}