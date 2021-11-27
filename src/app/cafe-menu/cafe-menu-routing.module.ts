import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CafeMenuPage } from './cafe-menu.page';

const routes: Routes = [
  {
    path: '',
    component: CafeMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CafeMenuPageRoutingModule {}
