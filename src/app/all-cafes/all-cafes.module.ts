import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllCafesPageRoutingModule } from './all-cafes-routing.module';

import { AllCafesPage } from './all-cafes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllCafesPageRoutingModule
  ],
  declarations: [AllCafesPage]
})
export class AllCafesPageModule {}
