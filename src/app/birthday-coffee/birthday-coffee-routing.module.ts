import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthdayCoffeePage } from './birthday-coffee.page';

const routes: Routes = [
  {
    path: '',
    component: BirthdayCoffeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthdayCoffeePageRoutingModule {}
