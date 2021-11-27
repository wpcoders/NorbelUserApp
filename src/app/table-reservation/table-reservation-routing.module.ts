import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableReservationPage } from './table-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: TableReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableReservationPageRoutingModule {}
