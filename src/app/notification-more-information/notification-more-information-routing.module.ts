import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationMoreInformationPage } from './notification-more-information.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationMoreInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationMoreInformationPageRoutingModule {}
