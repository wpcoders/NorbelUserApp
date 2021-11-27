import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification-more-information',
  templateUrl: './notification-more-information.page.html',
  styleUrls: ['./notification-more-information.page.scss'],
})
export class NotificationMoreInformationPage implements OnInit {
  banner_info: any;
  cafe_name: any;
  constructor(public menu: MenuController,
    public activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.cafe_name = this.activatedRoute.snapshot.paramMap.get('cafe_name');
    this.banner_info = this.activatedRoute.snapshot.paramMap.get('banner_info');
  }
  ionViewDidEnter(){
    this.menu.enable(true);
   }
}
