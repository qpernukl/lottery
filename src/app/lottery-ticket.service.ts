import { Injectable } from '@angular/core';
import { LotteryTicket } from './lottery-ticket';
import { isWeekend, isMonday, isTuesday, isWednesday, setDay } from 'date-fns';

@Injectable({
    providedIn: 'root'
})
export class LotteryTicketService {
    constructor() { }

    private getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private getLotteryDate(ticketDate: Date): Date {
        const WEDNESDAY = 3;
        const FRIDAY = 5;

        if (isWeekend(ticketDate) || isMonday(ticketDate) || isTuesday(ticketDate) || isWednesday(ticketDate)) {
            return setDay(ticketDate, WEDNESDAY);
        }
        return setDay(ticketDate, FRIDAY);
    }

    createTicket(size: number, ticketDate: Date): LotteryTicket {
        const plays: string[] = new Array();

        for (let i = 0; i < size; i++) {
            let play = '';

            for (let j = 0; j < 5; j++) {
                play += this.getRandomIntInclusive(1, 70);
            }
            play += this.getRandomIntInclusive(1, 25);
            plays.push(play);
        }
        return new LotteryTicket(this.getLotteryDate(ticketDate), plays);
    }
}
