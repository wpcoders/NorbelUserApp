import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationMoreInformationPageRoutingModule } from './notification-more-information-routing.module';

import { NotificationMoreInformationPage } from './notification-more-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationMoreInformationPageRoutingModule
  ],
  declarations: [NotificationMoreInformationPage]
})
export class NotificationMoreInformationPageModule {}
