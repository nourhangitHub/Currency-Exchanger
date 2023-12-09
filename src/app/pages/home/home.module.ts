import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ExchangeFormComponent } from './components/exchange-form/exchange-form.component';
import { ExchangeCardComponent } from './components/exchange-card/exchange-card.component'


@NgModule({
  declarations: [
    HomeComponent,
    ExchangeFormComponent,
    ExchangeCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
