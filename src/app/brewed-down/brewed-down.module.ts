import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrewedDownPageRoutingModule } from './brewed-down-routing.module';

import { BrewedDownPage } from './brewed-down.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrewedDownPageRoutingModule
  ],
  declarations: [BrewedDownPage]
})
export class BrewedDownPageModule {}
