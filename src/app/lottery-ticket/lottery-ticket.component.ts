import { Component, OnInit, Input } from '@angular/core';
import { LotteryTicket } from '../lottery-ticket';

@Component({
  selector: 'app-lottery-ticket',
  templateUrl: './lottery-ticket.component.html',
  styleUrls: ['./lottery-ticket.component.css']
})
export class LotteryTicketComponent implements OnInit {
  constructor() { }

  @Input() ticket: LotteryTicket;
  plays: string[];

  ngOnInit() {
  }

}
