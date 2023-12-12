import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { latestRatesResolver } from 'src/app/core/guards/latest-rates.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {rates: latestRatesResolver},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }