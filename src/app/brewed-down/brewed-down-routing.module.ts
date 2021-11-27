import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrewedDownPage } from './brewed-down.page';

const routes: Routes = [
  {
    path: '',
    component: BrewedDownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrewedDownPageRoutingModule {}
