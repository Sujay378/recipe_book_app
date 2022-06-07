import { EventEmitter, Injectable } from '@angular/core';
import { Recepie } from '../models/recepie.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {
  selectedRecepie= new EventEmitter<Recepie>();  
  private recepies: Recepie[] = [
    new Recepie('Test recepie', 'A recepie fro test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574', [new Ingredient('potato',10),new Ingredient('butter', 5)]), new Recepie('Test recepie 2', 'Another recepie fro test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',[new Ingredient('Spinach',8),new Ingredient('Salt', 3)])
  ];

  constructor() { }

  getRecepies() {
    return this.recepies.slice();
  }

  getRecipe(id : number) {
    return this.recepies[id];
  }
}
