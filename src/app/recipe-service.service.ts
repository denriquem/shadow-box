import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl =
    'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1';

  private httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-key': 'c70b672410msh4c10651c3c3fcb3p15b0a1jsna9ed39756583',
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    }),
  };
  constructor(private http: HttpClient) {}

  getRecipe() {
    return this.http.get(this.apiUrl, this.httpOptions);
  }
}
