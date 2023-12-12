import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConvertedAmountDetails } from 'src/app/core/classes/converted-amount-details';
import { ConvertObject } from 'src/app/core/interfaces/rates-response';
import { ApiServiceService } from 'src/app/core/services/api-service.service';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.scss']
})
export class ExchangeFormComponent implements OnInit {
  exchangeForm!: FormGroup;
  rateList: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private apiServiceService : ApiServiceService, 
    private activatedRoute: ActivatedRoute){}

   ngOnInit(): void {
    this.buildProfileForm();
    this.activatedRoute.data.subscribe(
      ({rates}) => {
        this.rateList = Object.keys(rates.rates)
      });

      this.form['amount'].valueChanges.subscribe(() => {
        console.log(this.form['amount'].hasError('required') && this.form['amount'].hasError('min'))
        if(!this.form['amount'].hasError('required') && !this.form['amount'].hasError('min')){
            this.form['from'].enable();
            this.form['to'].enable();
        }
      })
  }

  buildProfileForm(): void {
    this.exchangeForm = this.formBuilder.group({
      amount: [{ value: null, disabled: false },[Validators.required, Validators.min(1)]],
      from :[{ value: "EUR", disabled: true },[Validators.required]],
      to :[{ value: "USD", disabled: true },[Validators.required]]
    });
  }

  // Get all Form Controls
  get form() {
    return this.exchangeForm.controls;
  }

  exchangeRate(){
    const [fromValue,toValue] = [this.form['from'].value,this.form['to'].value];
    this.form['from'].setValue(toValue);
    this.form['to'].setValue(fromValue);
  }

  submitForm(){
    const convertObject = new ConvertedAmountDetails(this.form['from'].value, this.form['to'].value, Number(this.form['amount'].value));
    const requestObject = convertObject.amountDetails as ConvertObject;
    this.apiServiceService.convertAmount(requestObject).subscribe(res => {
      console.log(res);
    })
  }
}
