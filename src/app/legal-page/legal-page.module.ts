import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegalPagePageRoutingModule } from './legal-page-routing.module';

import { LegalPagePage } from './legal-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegalPagePageRoutingModule
  ],
  declarations: [LegalPagePage]
})
export class LegalPagePageModule {}
