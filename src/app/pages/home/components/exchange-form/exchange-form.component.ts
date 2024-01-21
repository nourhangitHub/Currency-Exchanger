import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConvertedAmountDetails } from 'src/app/core/classes/converted-amount-details';
import {
  ConvertObject,
  ErrorResponse,
} from 'src/app/core/interfaces/rates-response';
import { ApiServiceService } from 'src/app/core/services/api-service.service';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.scss'],
})
export class ExchangeFormComponent implements OnInit, OnDestroy {
  exchangeForm: FormGroup;
  subscription: Subscription;
  rateList: string[] = [];
  rates: any;
  rate: any;
  date: string;
  base: string;
  error: ErrorResponse;

  constructor(
    private formBuilder: FormBuilder,
    private apiServiceService: ApiServiceService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.subscription = this.activatedRoute.data.subscribe(({ rates }) => {
      if (rates.success) {
        this.rates = rates.rates;
        this.date = rates.date;
        this.base = rates.base;
        this.rate = Object.entries(this.rates).find(
          (rate) => rate[0] === this.form['to'].value,
        );
        this.rateList = Object.keys(rates.rates);
      } else {
        this.error = rates;
      }
    });

    this.fireWhenUpdateAmount();
    this.fireWhenUpdateRate();
  }

  fireWhenUpdateAmount() {
    this.form['amount'].valueChanges.subscribe(() => {
      if (!this.form['amount'].hasError('required')) {
        this.form['from'].enable();
        this.form['to'].enable();
      }
    });
  }

  fireWhenUpdateRate() {
    this.form['to'].valueChanges.subscribe(() => {
      this.rate = Object.entries(this.rates).find(
        (rate) => rate[0] === this.form['to'].value,
      );
    });
  }

  private buildForm(): void {
    this.exchangeForm = this.formBuilder.group({
      amount: [
        { value: null, disabled: false },
        [Validators.required, Validators.min(1)],
      ],
      from: [{ value: 'EUR', disabled: true }, [Validators.required]],
      to: [{ value: 'USD', disabled: true }, [Validators.required]],
    });
  }

  // Get all Form Controls
  get form() {
    return this.exchangeForm.controls;
  }

  exchangeRate():void {
    const [fromValue, toValue] = [
      this.form['from'].value,
      this.form['to'].value,
    ];
    this.form['from'].setValue(toValue);
    this.form['to'].setValue(fromValue);
  }

  submitForm(): void {
    const convertObject = new ConvertedAmountDetails(
      this.form['from'].value,
      this.form['to'].value,
      this.form['amount'].value,
      this.date,
      this.base,
    );
    const requestObject = convertObject.amountDetails as ConvertObject;
    this.apiServiceService.convertAmount(requestObject).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
