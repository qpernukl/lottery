import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryTicketComponent } from './lottery-ticket.component';
import { ViewChild, Component } from '@angular/core';
import { LotteryTicketService } from '../lottery-ticket.service';
import { LotteryNumberComponent } from '../lottery-number/lottery-number.component';

describe('LotteryTicketComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, LotteryTicketComponent, LotteryNumberComponent ],
      providers: [ LotteryTicketService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should display the lottery ticket', () => {
    const ticketService = TestBed.get(LotteryTicketService);
    component.ticketComponent.ticket = ticketService.createTicket(2, new Date());
    fixture.detectChanges();
    const ticketElements = fixture.nativeElement.querySelectorAll('div');
    expect(ticketElements.length).toBe(2);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   @Component({
      // tslint:disable-next-line:component-selector
      selector: 'host_component',
      template: '<app-lottery-ticket></app-lottery-ticket>'
  })
  class TestHostComponent {
      @ViewChild(LotteryTicketComponent)
      public ticketComponent: LotteryTicketComponent;
  }
});
