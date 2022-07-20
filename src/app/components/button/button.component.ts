import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalculatorService } from 'src/app/prodivers/calculator/calculator.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() preset: 'default' | 'blue' = 'default';
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor(private calculator: CalculatorService) {}

  ngOnInit(): void {
    console.log(this.preset);
  }

  sendOnClick() {
    this.calculator._myvar = 3;
    this.onClick.emit(true);
  }
}
