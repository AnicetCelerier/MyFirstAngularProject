import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CalculatorService } from 'src/app/prodivers/calculator/calculator.service';

class A {
  a: string = 'toto';
  // b: string
  constructor(private b: string) {}

  showB() {
    console.log(this.b);
  }
}

const a = new A('jordan');
a.showB();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  _name: string = 'Jordan';
  _myclass: string = '';
  _firstName = new FormControl(null, [Validators.required, Validators.email]);

  constructor(private calculator: CalculatorService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this._myclass = 'my-class';
    }, 3000);
  }

  handleClick(event: any) {
    console.log(this.calculator.addition(1, 2));
  }

  submit() {
    console.log(this._firstName.value);
  }
}
