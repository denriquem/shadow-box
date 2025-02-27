import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RecipeService } from '../recipe-service.service';
import { RecipieComponent } from '../recipie/recipie.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, RecipieComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [RecipeService],
})
export class HomeComponent implements OnInit {
  title: string;
  subtitle: string;

  recipies: any;

  constructor(private recipeService: RecipeService) {
    this.title = 'Home';
    this.subtitle = 'This is the home page';
  }

  ngOnInit(): void {
    this.recipeService.getRecipe().subscribe((data) => {
      this.recipies = data;
      console.log('Hello');
      console.log(data);
    });
  }
}
