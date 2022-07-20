import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  _myvar = 1;
  constructor() {}

  addition(a: number, b: number) {
    return a + b + this._myvar;
  }
}
