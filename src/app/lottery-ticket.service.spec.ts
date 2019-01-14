import { TestBed } from '@angular/core/testing';

import { LotteryTicketService } from './lottery-ticket.service';
import { isWednesday, setDay, isFriday } from 'date-fns';

describe('LotteryTicketService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: LotteryTicketService = TestBed.get(LotteryTicketService);
        expect(service).toBeTruthy();
    });

    it('creates ticket for wednesday when ticket is created on the weekend', () => {
        const service: LotteryTicketService = TestBed.get(LotteryTicketService);
        const sunday = setDay(new Date(), 0);
        expectWednesdayTicket(service, sunday);

        const saturday = setDay(new Date(), 6);
        expectWednesdayTicket(service, saturday);
    });

    it('creates ticket for wednesday when ticket is created on the monday, tuesday, or wednesday', () => {
        const service: LotteryTicketService = TestBed.get(LotteryTicketService);
        const monday = setDay(new Date(), 1);
        expectWednesdayTicket(service, monday);

        const tuesday = setDay(new Date(), 2);
        expectWednesdayTicket(service, tuesday);

        const wednesday = setDay(new Date(), 3);
        expectWednesdayTicket(service, wednesday);
    });

    it('creates ticket for friday when ticket is created on thursday or friday', () => {
        const service: LotteryTicketService = TestBed.get(LotteryTicketService);
        const thursday = setDay(new Date(), 4);
        expectFridayTicket(service, thursday);

        const friday = setDay(new Date(), 5);
        expectFridayTicket(service, friday);
    });

    it('creates a valid lottery ticket for mega millions', () => {
        const service: LotteryTicketService = TestBed.get(LotteryTicketService);
        const monday = setDay(new Date(), 1);
        const lotteryTicket = service.createTicket(2, monday);
        const play = lotteryTicket.getPlays()[0].split(' ');

        for (let i = 0; i < play.length - 1; i++) {
            const lotteryNumber = parseInt(play[i], 10);
            expect(lotteryNumber).toBeGreaterThanOrEqual(1);
            expect(lotteryNumber).toBeLessThanOrEqual(70);
        }
    });

    function expectWednesdayTicket(service: LotteryTicketService, ticketDate: Date) {
        const lotteryTicket = service.createTicket(2, ticketDate);
        expect(lotteryTicket.getPlays().length).toEqual(2);
        expect(isWednesday(lotteryTicket.getDate())).toBeTruthy();
    }

    function expectFridayTicket(service: LotteryTicketService, ticketDate: Date) {
        const lotteryTicket = service.createTicket(2, ticketDate);
        expect(lotteryTicket.getPlays().length).toEqual(2);
        expect(isFriday(lotteryTicket.getDate())).toBeTruthy();
    }
});
