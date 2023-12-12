import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Home',
    loadChildren: () =>
          import('./pages/home/home.module').then(
            (m) => m.HomeModule
          ),
  },
  {
    path: 'Details',
    loadChildren: () =>
          import('./pages/details/details.module').then(
            (m) => m.DetailsModule
          ),
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
