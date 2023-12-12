import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { RatesResponse } from '../interfaces/rates-response';

export const latestRatesResolver: ResolveFn<RatesResponse> = () => {
    return inject(ApiServiceService).getExchangeRates();
};
