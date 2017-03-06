import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';
import { HeroeService } from './heroe.service';

import 'rxjs/add/operator/switchMap';
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
export class HeroeDetalleComponent implements OnInit {
  @Input()
  heroe: Heroe;

constructor(
  private heroeService: HeroeService,
  private route: ActivatedRoute,
  private location: Location
) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.heroeService.getHero(+params['id']))
    .subscribe(heroe => this.heroe = heroe);
}

  goBack(): void {
  this.location.back();
}
}