import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
  stack: string[] = ["C#", "Angular", "Bootstrap", "asp.net","typescript"];
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = true;
  message = 'Hello, World';

  sayMessage() {
    alert(this.message);
  
  }
}
