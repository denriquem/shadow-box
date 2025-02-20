import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  title: string;
  subtitle: string;

  constructor() {
    this.title = 'Home';
    this.subtitle = 'This is the home page';
  }

  ngOnInit(): void {
    console.log('Hello first');
  }
}
