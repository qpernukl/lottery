import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LotteryResultService {
  constructor(private http: HttpClient) { }

  serviceUrl  = 'http://localhost:8080/resultForDate';

  fetchResultForDate(resultDate: string) {
      return this.http.get(this.serviceUrl + '?date=' + resultDate);
  }
}
