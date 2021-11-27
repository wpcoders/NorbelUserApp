import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCafesPage } from './all-cafes.page';

const routes: Routes = [
  {
    path: '',
    component: AllCafesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCafesPageRoutingModule {}
