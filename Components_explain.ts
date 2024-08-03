/* Components in Angular

Components are the foundational building blocks for any Angular application. Each component has three parts:

TypeScript class
HTML template
CSS styles */
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Hello
  `,
  styles: `
    :host {
      color: blue;
    }
  `,
  standalone: true,
})
export class AppComponent {}
