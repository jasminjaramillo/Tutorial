import { Injectable } from '@angular/core';
import { Heroe } from './heroe';
import { HEROES } from './mock-heroes';
@Injectable()
export class HeroeService {
  getHeroes(): Promise<Heroe[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Heroe[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeroes()), 2000);
  });
}
}