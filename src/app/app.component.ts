import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fireError() {
    const shthppns = r; // r is not defined == ReferenceError
    console.log("I won't be logged");
  }

  fireErorWithNet() {
    try {
      const shthppns = r; // r is not defined == ReferenceError
    } catch (error) {
      console.log('> Error is handled: ', error.name);
    }
    console.log('> And Control continues from this statement');
  }
}
