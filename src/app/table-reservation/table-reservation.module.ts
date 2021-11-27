import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableReservationPageRoutingModule } from './table-reservation-routing.module';

import { TableReservationPage } from './table-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableReservationPageRoutingModule
  ],
  declarations: [TableReservationPage]
})
export class TableReservationPageModule {}
