import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportAnIssuePageRoutingModule } from './report-an-issue-routing.module';

import { ReportAnIssuePage } from './report-an-issue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportAnIssuePageRoutingModule
  ],
  declarations: [ReportAnIssuePage]
})
export class ReportAnIssuePageModule {}
