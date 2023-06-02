import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    {{ 0.1 + 0.2 | currency:'MNT':'symbol':'1.2-10'  }}
    <br>
    {{ 0.1 + 0.2 | currency:'MNT':'symbol':'1.17-17'  }}

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
