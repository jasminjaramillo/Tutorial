import { Component } from '@angular/core';

export class Heroe {
  id:number;
  nombre: string;
}

const HEROES: Heroe[] = [
  { id: 11, nombre: 'Mr. Nice' },
  { id: 12, nombre: 'Narco' },
  { id: 13, nombre: 'Bombasto' },
  { id: 14, nombre: 'Celeritas' },
  { id: 15, nombre: 'Magneta' },
  { id: 16, nombre: 'RubberMan' },
  { id: 17, nombre: 'Dynama' },
  { id: 18, nombre: 'Dr IQ' },
  { id: 19, nombre: 'Magma' },
  { id: 20, nombre: 'Tornado' }
];

@Component({
  selector: 'app-root',
//templateUrl: './app.component.html',
template:  `
    <h1>{{titulo}}</h1>
    <h2>Mis Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let heroe of heroes"
        [class.selected]="heroe === selectedHeroe"
        (click)="onSelect(heroe)">
        <span class="badge">{{heroe.id}}</span> {{heroe.nombre}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{selectedHeroe.nombre}} details!</h2>
      <div><label>id: </label>{{selectedHeroe.id}}</div>
      <div>
        <label>nombre: </label>
        <input [(ngModel)]="selectedHeroe.nombre" placeholder="nombre"/>
      </div>
    </div>
 `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
  titulo = 'LISTA DE HEROES';
  heroes = HEROES;
  selectedHeroe: Heroe;
  
 onSelect(heroe: Heroe): void {
    this.selectedHeroe = heroe;
 }
}


