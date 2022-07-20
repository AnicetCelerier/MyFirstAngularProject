import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() preset: 'default' | 'blue' = 'default';
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.preset);
  }

  sendOnClick() {
    this.onClick.emit(true);
  }
}
