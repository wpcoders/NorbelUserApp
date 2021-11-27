import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { Location } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';
import { UtilityService } from '../providers/utility.service';
@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {

  constructor(
    public navCtl:NavController,
    public alertController: AlertController,
    private platform: Platform,
    private _location: Location,
    public network: Network,
    public utility: UtilityService
  ) { }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
      if (this.network.type == this.network.Connection.NONE) {
        this.utility.presentToast("Please check network connection");
      // this.nav.navigateForward('/network')
      } else {
      }
    });
  }
  
}
