import { Component, Input, OnInit } from '@angular/core';
import { RecepieService } from 'src/app/services/recepie.service';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
  @Input() recepie: Recepie;

  constructor(private shService: ShoppingService) { }

  ngOnInit(): void {
  }

  addIngridientToList(data: Ingredient[]) {
    // console.log(data);
    this.shService.addRecepieIngredients(data);
  }

}
