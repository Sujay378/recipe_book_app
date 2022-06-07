import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecepieService } from 'src/app/services/recepie.service';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recepie } from '../../../models/recepie.model';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
  recepie: Recepie;
  index: number;

  constructor(private shService: ShoppingService,
              private route: ActivatedRoute,
              private  recipeService: RecepieService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.index = +params['id'];
        this.recepie = this.recipeService.getRecipe(this.index);
      }
    )
  }

  addIngridientToList(data: Ingredient[]) {
    // console.log(data);
    this.shService.addRecepieIngredients(data);
  }

}
