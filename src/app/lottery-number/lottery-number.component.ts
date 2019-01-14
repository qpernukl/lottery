import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lottery-number',
  templateUrl: './lottery-number.component.html',
  styleUrls: ['./lottery-number.component.css']
})
export class LotteryNumberComponent implements OnInit {
  constructor() { }

  @Input() number: String;

  numberAsArray: string[];

  ngOnInit() {
      this.numberAsArray = this.number.split(' ');
  }

}
