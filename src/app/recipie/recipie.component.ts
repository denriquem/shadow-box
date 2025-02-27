import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipie',
  imports: [NgFor],
  templateUrl: './recipie.component.html',
  styleUrl: './recipie.component.css',
})
export class RecipieComponent {
  @Input() ingredients: any[];
  @Input() title: any;

  constructor() {
    this.ingredients = [];
    this.title = '';
  }
}
