import { Component, Input } from '@angular/core';
import { Heroe } from './heroe';
@Component({
  selector: 'mi-heroe-detalle',
  template: `
    <div *ngIf="hero">
      <h2>{{heroe.nombre}} details!</h2>
      <div><label>id: </label>{{heroe.id}}</div>
      <div>
        <label>nombre: </label>
        <input [(ngModel)]="heroe.nombre" placeholder="nombre"/>
      </div>
    </div>
  `
})
export class HeroeDetalleComponent {
  @Input()
  heroe: Heroe;
}