import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/houses/houses.module').then((m) => m.HousesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
