import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/core/services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private apiServiceService: ApiServiceService){}

  ngOnInit(): void {
    this.getExchangeRates();
  }

  getExchangeRates(){
    this.apiServiceService.getExchangeRates().subscribe(res => {
      console.log(res);
    })
  }
}
