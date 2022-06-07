import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shList: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shList.getIngredients();
    this.shList.currentList
    .subscribe(
      (value: Ingredient[]) => {
        this.ingredients = value;
      }
    )
  }

  addSelectedItem(index: number) {
    this.shList.addToDeleteArray(index);
  }
}
