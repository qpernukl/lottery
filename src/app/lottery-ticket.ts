export class LotteryTicket {
    private date: Date;
    private plays: string[];

    constructor(date: Date, plays: string[]) {
        this.date = date;
        this.plays = plays;
    }

    getDate(): Date {
        return this.date;
    }

    getPlays(): string[] {
        return this.plays;
    }
}
