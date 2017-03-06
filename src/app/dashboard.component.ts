import { Component, OnInit } from '@angular/core';

import { Heroe } from './heroe';
import { HeroeService } from './heroe.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroService: HeroeService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
