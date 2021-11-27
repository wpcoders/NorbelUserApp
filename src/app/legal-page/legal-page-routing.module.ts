import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalPagePage } from './legal-page.page';

const routes: Routes = [
  {
    path: '',
    component: LegalPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalPagePageRoutingModule {}
