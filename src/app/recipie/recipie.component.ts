import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-recipie',
  imports: [NgFor, FormsModule, FilterPipe],
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

  searchText = '';
}
