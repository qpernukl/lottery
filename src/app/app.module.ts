import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LotteryNumberComponent } from './lottery-number/lottery-number.component';
import { LotteryTicketComponent } from './lottery-ticket/lottery-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LotteryNumberComponent,
    LotteryTicketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
 ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
