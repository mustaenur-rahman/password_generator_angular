import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  onButtonClick(){
    console.log(this.useLetters);
    console.log(this.useNumbers);
    console.log(this.useSymbols);
    this.password = 'my password !!';
  }

  onChangeUseLetters(){
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }
}
