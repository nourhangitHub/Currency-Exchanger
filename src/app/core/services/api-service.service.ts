import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  URL = environment.BaseURL;
  
  constructor(private http: HttpClient) {}

   // get Exchange Rates
   getExchangeRates(): Observable<any[]> {
    return this.http.get<any>(`${this.URL}/latest`,{
        params: {
          access_key: environment.API_Key,
        },
    });
  }
}
