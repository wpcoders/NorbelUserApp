import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CafeMenuPageRoutingModule } from './cafe-menu-routing.module';

import { CafeMenuPage } from './cafe-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CafeMenuPageRoutingModule
  ],
  declarations: [CafeMenuPage]
})
export class CafeMenuPageModule {}
