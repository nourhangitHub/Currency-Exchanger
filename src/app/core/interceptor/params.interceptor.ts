import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class ParamsInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
   
    const newReq = request.clone({
      params: (request.params ? request.params : new HttpParams()).set(
        'access_key',
        environment.API_Key,
      ),
    });
    return next.handle(newReq)
  }
}
