import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development'
import { Observable } from 'rxjs';
import { RatesResponse, ConvertResponse, ConvertObject } from '../interfaces/rates-response';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  URL = environment.BaseURL;
  
  constructor(private http: HttpClient) {}

   // get Exchange Rates
   getExchangeRates(): Observable<RatesResponse> {
    return this.http.get<RatesResponse>(`${this.URL}/latest`);
  }

  convertAmount(requestObject: ConvertObject) : Observable<ConvertResponse>{
    return this.http.get<ConvertResponse>(`${this.URL}/convert`,{
      params: {
        from : requestObject.from,
        to: requestObject.to,
        amount: requestObject.amount,
        date: requestObject.date,
        base: requestObject.base
      },
  });
  }
}
