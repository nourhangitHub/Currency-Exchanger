import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { latestRatesResolver } from './latest-rates.resolver';
import { RatesResponse } from '../interfaces/rates-response';

describe('latestRatesResolver', () => {
  const executeResolver: ResolveFn<RatesResponse> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => latestRatesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
