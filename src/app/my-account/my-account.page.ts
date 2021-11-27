import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { ServicesService } from '../providers/services.service';
import { UtilityService } from '../providers/utility.service';
import { Storage } from '@ionic/storage-angular';
import { AuthenticationServiceService } from '../providers/authentication-service.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  receiveNotification: any;
  auth_token: any;
  userId: any;
  constructor(public menu: MenuController,
    public navctl: NavController,
    public service: ServicesService,
    public utility: UtilityService,
    private storage: Storage,
    private auth: AuthenticationServiceService,
    private alertCtrl: AlertController
  ) {

  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.menu.enable(true);
    this.userId = localStorage.getItem('userId');
    this.doGetNotificationStatus();
  }
  receiveNotificationEvent() {

    this.doChangeNotificationStatus();
  }
  doGetNotificationStatus() {
    this.storage.get("auth_token").then(val => {
      console.log(val);
      this.auth_token = val;
      let formdata = new FormData();
      formdata.append('user_id', this.userId);
      formdata.append('token', this.auth_token);
      this.service.doGetNotificationStatus(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res);
          this.receiveNotification = res.data;
          // this.utility.presentToast(res.message);
        } else {
          this.utility.presentToast(res.message);
        }
      });
    });
  }
  doChangeNotificationStatus() {
    this.storage.get("auth_token").then(val => {
      console.log(val);
      this.auth_token = val;
      let formdata = new FormData();
      formdata.append('user_id', this.userId);
      formdata.append('token', this.auth_token);
      formdata.append('notificationStatus', this.receiveNotification);
      this.service.doChangeNotificationStatus(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res);
          this.utility.presentToast(res.message);
        } else {
          this.utility.presentToast(res.message);
        }
      });
    });

  }
  doDeleteCustomer() {
    this.storage.get("auth_token").then(val => {
      console.log(val);
      this.auth_token = val;
      let formdata = new FormData();
      formdata.append('user_id', this.userId);
      formdata.append('token', this.auth_token);
      this.service.doDeleteCustomer(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res);
          this.utility.presentToast(res.message);
          this.auth.logout();
        } else {
          this.utility.presentToast(res.message);
        }
      });
    });
  }
  async presentConfirm() {
    let alert = await this.alertCtrl.create({
      subHeader: 'Account Delete Confirmation',
      message: 'Are you sure you want to delete this Account?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ok',
          handler: () => {
            this.doDeleteCustomer();
          }
        }
      ]
    });
    alert.present();
  }

}
