import { Ingredient } from "src/app/shared/ingredient.model";

export class Recepie {
  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    public ingredients: Ingredient[]
  ) {}
}
