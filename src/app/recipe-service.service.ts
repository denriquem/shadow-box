import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod'; // Import environment

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl =
    'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1';

  private httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-key': environment.apiKey,
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    }),
  };
  constructor(private http: HttpClient) {}

  getRecipe() {
    return this.http.get(this.apiUrl, this.httpOptions);
  }
}
