import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryNumberComponent } from './lottery-number.component';
import { ViewChild, Component } from '@angular/core';

describe('LotteryNumberComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryNumberComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should display the lottery number', () => {
    const testData = '2 4 10 20 12 1';
    component.numberComponent.number = testData;
    fixture.detectChanges();
    const numberElements = fixture.nativeElement.querySelectorAll('span');
    expect(numberElements.length).toBe(6);
    expect(numberElements[numberElements.length - 1].className).toBe('last');
    const numbersAsArray: string[] = testData.split(' ');
    for (let i = 0; i < numberElements.length; i++) {
        expect(numberElements[i].innerText.trim()).toEqual(numbersAsArray[i]);
    }
  });

  @Component({
      // tslint:disable-next-line:component-selector
      selector: 'host_component',
      template: '<app-lottery-number></app-lottery-number>'
  })
  class TestHostComponent {
      @ViewChild(LotteryNumberComponent)
      public numberComponent: LotteryNumberComponent;
  }
});
