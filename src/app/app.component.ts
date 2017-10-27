import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  view: any[] = [700, 400];
  data: any[];

  constructor() {
    this.data = [
      {
        'name': 'Germany',
        'value': 8940000
      },
      {
        'name': 'USA',
        'value': 5000000
      },
      {
        'name': 'France',
        'value': 7200000
      }
    ];
  }

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  onSelect(event) {
    console.log(event);
  }

}
