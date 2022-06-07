import { EventEmitter, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  currentList = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[]= [new Ingredient('Apple', 10), new Ingredient('Sugar', 10)];
  private dleteArray: number[]= [];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addRecepieIngredients(data: Ingredient[]) {
    for(let ingredient of data) {
      let index = this.ingredients.findIndex(obj => obj.name === ingredient.name);
      if(index >= 0) {
        this.ingredients[index].amount += ingredient.amount;
      } else {
        this.ingredients.push(ingredient);
      }
    }
    this.currentList.emit(this.ingredients.slice());
  }

  addToDeleteArray(index: number) {
    if(this.dleteArray.indexOf(index) < 0){
      this.dleteArray.push(index);
    }
    console.log(this.dleteArray);
  }

  deleteItemsInList() {
    this.dleteArray.forEach(index => {
      // console.log("delete Arrays ==== ",index);
      console.log(this.ingredients.splice(index, 1));
    })
    this.dleteArray = [];
    this.currentList.emit(this.ingredients.slice());
  }
}
