import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-legal-page',
  templateUrl: './legal-page.page.html',
  styleUrls: ['./legal-page.page.scss'],
})
export class LegalPagePage implements OnInit {
  state: any;
  constructor(public menu: MenuController,
    public navctl: NavController,
    public route: Router,
    public activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.state = this.activatedRoute.snapshot.paramMap.get('state');
    console.log(this.state);
    if (this.state == 'registration') {
      this.menu.enable(false);
    } else {
      this.menu.enable(true);

    }
  }
  doBack() {
    if (this.state == 'registration') {
      this.navctl.back();
    } else {
      this.route.navigateByUrl('/tabs/tab1');
    }

  }
}
