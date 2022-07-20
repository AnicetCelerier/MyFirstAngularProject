import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  _name: string = 'Jordan';
  _myclass: string = '';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this._myclass = 'my-class';
    }, 3000);
  }

  handleClick(event: any) {
    console.log(
      '🚀 ~ file: home.component.ts ~ line 20 ~ HomeComponent ~ handleClick ~ event',
      event
    );
    alert('Tu as cliqué!!');
  }
}
