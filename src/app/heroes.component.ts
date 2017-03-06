import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule, Routes }   from '@angular/router';
import { Location } from '@angular/common';
import { Heroe } from './heroe';

import { HeroeService } from './heroe.service';
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  heroes: Heroe[];
  selectedHeroe: Heroe;

  constructor(
    private router: Router,
    private heroeService: HeroeService) { }

  getHeroes(): void {
    this.heroeService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(heroe: Heroe): void {
    this.selectedHeroe = heroe;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHeroe.id]);
  }
}