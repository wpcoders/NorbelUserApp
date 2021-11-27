import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportAnIssuePage } from './report-an-issue.page';

const routes: Routes = [
  {
    path: '',
    component: ReportAnIssuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportAnIssuePageRoutingModule {}
