import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ServicesService } from '../providers/services.service';
import { UtilityService } from '../providers/utility.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-all-cafes',
  templateUrl: './all-cafes.page.html',
  styleUrls: ['./all-cafes.page.scss'],
})
export class AllCafesPage implements OnInit {
  auth_token: any;
  userId: any;
  imagePath: any;
  cafe_name: any;
  cafeListData: any = [];

  constructor(public menu: MenuController,
    public navctl: NavController,
    public service: ServicesService,
    public utility: UtilityService,
    private storage: Storage,) { }

  ngOnInit() {
  }
  ionViewDidEnter() {

    this.menu.enable(true);
    this.userId = localStorage.getItem('userId');
    this.doCafeList();
  }
  doAddCafe() {
    this.navctl.navigateForward('/tabs/verification');
  }

  doCafeList() {
    this.storage.get("auth_token").then(val => {
      console.log(val);
      this.auth_token = val;
      let formdata = new FormData();
      formdata.append('user_id', this.userId);
      formdata.append('token', this.auth_token);
      this.service.doCafeList(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res);
          this.cafeListData = res.data;
          this.cafe_name = res.data[0].cafe_name
          this.imagePath = res.image_path;
        } else {
          this.utility.presentToast(res.message);
        }
      });
    });
  }
  doOpenNow(cafe_id){
    console.log(cafe_id);
    localStorage.setItem('cafe_id', cafe_id);
    this.navctl.navigateForward('/tabs/tab1');
  }
}
