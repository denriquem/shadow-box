import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipie',
  imports: [],
  templateUrl: './recipie.component.html',
  styleUrl: './recipie.component.css',
})
export class RecipieComponent {
  @Input() ingredients: string[];
  @Input() title: any;

  constructor() {
    this.ingredients = [];
    this.title = '';
  }
}
