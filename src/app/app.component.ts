import { Component } from '@angular/core';

export class Heroe {
  id:number;
  nombre: string;
}

@Component({
  selector: 'app-root',
//templateUrl: './app.component.html',
template:  `
<h1>{{titulo}}</h1>
<h2>{{heroe.nombre}} details!</h2>
<div><label>id:</label> {{heroe.id}}</div>
<div>
<label>nombre: </label>
<input [(ngModel)]="heroe.nombre" placeholder= "nombre">
</div>
 `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'LISTA DE HEROES';
  heroe: Heroe = {
    id: 1,
    nombre: 'Superman'
};
}


