import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') newName: ElementRef;
  @ViewChild('amountInput') newAmount: ElementRef;

  constructor(private shList: ShoppingService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const item = new Ingredient(this.newName.nativeElement.value, +this.newAmount.nativeElement.value);
    this.shList.addRecepieIngredients([item]);
    this.onClear();
  }

  onClear() {
    this.newName.nativeElement.value='';
    this.newAmount.nativeElement.value='';
  }

  deleteItems() {
    // this.shList.getDeleteArray();
    this.shList.deleteItemsInList();
  }

}
