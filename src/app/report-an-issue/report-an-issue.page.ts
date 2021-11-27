import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-report-an-issue',
  templateUrl: './report-an-issue.page.html',
  styleUrls: ['./report-an-issue.page.scss'],
})
export class ReportAnIssuePage implements OnInit {

  constructor(public menu: MenuController) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menu.enable(true);
   }
}
