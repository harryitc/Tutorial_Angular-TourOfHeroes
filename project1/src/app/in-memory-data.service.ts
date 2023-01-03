import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 12, name: 'Phan Ngọc Cường' },
      { id: 13, name: 'Nguyễn Thị Bích' },
      { id: 14, name: 'Phan Ngọc Tú' },
      { id: 15, name: 'Phan Tâm' },
      { id: 16, name: 'Phan Thị Thanh Hiếu' },
      { id: 17, name: 'Nguyễn Văn Năm' },
      { id: 18, name: 'Nguyễn Thị Ngọc Diễn' },
      { id: 19, name: 'Nguyễn Văn Ngọc' },
      { id: 20, name: 'Nguyễn Thị Bích Lan' },
    ]
    return { heroes }
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ?
      Math.max(...heroes.map(hero => hero.id)) + 1 : 1
  }

  constructor() { }
}