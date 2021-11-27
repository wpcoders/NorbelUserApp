import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ServicesService } from '../providers/services.service';
import { UtilityService } from '../providers/utility.service';
import { Storage } from '@ionic/storage-angular';

import { Router, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-cafe-menu',
  templateUrl: './cafe-menu.page.html',
  styleUrls: ['./cafe-menu.page.scss'],
})
export class CafeMenuPage implements OnInit {
  auth_token: any;
  imagePath: any;
  cafe_id: any;
  cafe_name: any;
  menuData: any = [];
  constructor(public menu: MenuController,
    public navctl: NavController,
    public service: ServicesService,
    public utility: UtilityService,
    private storage: Storage,
    public route: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.menu.enable(true);
    this.cafe_id = localStorage.getItem('cafe_id');
    this.cafe_name = this.activatedRoute.snapshot.paramMap.get('cafe_name');
    
    this.doCafeMenu();
  }
  doBack() {
    this.navctl.back();
  }
  doCafeMenu() {
    this.storage.get("auth_token").then(val => {
      console.log(val);

      this.auth_token = val;

      let formdata = new FormData();
      formdata.append('cafe_id', this.cafe_id);
      formdata.append('token', this.auth_token);
      this.service.doCafeMenu(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res);
          this.menuData = res.data;
          this.imagePath = res.image_path;


        } else {

          this.utility.presentToast(res.message);
        }
      });

    });
  }

}
