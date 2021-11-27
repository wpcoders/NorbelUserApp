import { Component } from '@angular/core';
import { NavController, ToastController, AlertController, Platform } from '@ionic/angular';
import { AuthenticationServiceService } from './providers/authentication-service.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import OneSignal from 'onesignal-cordova-plugin';
import { Network } from '@ionic-native/network/ngx';
import { UtilityService } from './providers/utility.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  state: any;
  userStatus: any;
  constructor(public navctl: NavController,
    public toast: ToastController,
    public storage: Storage,
    private router: Router,
    private auth: AuthenticationServiceService,
    public alertController: AlertController,
    private platform: Platform,
    public utility:UtilityService,
    private _location: Location,
    public network: Network,
  ) {
    this.platform.ready().then(() => {
      OneSignal.setAppId("43dddbeb-ec41-4203-9035-0acef58c239d");
      OneSignal.setNotificationOpenedHandler(function (jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      });

      // iOS - Prompts the user for notification permissions.
      //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
      OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
        console.log("User accepted notifications: " + accepted);
      });

    });
    this.initializeApp();
  }
  async showAlert(title, msg, task) {
    const alert = await this.alertController.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    })
    alert.present();
  }
  async initializeApp() {

    await this.storage.create();
    this.doBackEvent();
    if (this.isConnected()) {
      //  this.service.presentToast("yes network");
    }
    else {
      this.utility.presentToast("Network was disconnected ");
    }
    this.checkConn();
    this.auth.authenticationState.subscribe(state => {
      console.log(state);
      this.state = state;
      if (state) {
        this.userStatus = localStorage.getItem('userStatus');
        console.log(this.userStatus);

        if (this.userStatus == "old_user") {
          this.router.navigate(["/tabs/tab1"]);
        } else {
          this.navctl.navigateForward('/tabs/verification');
        }

      } else {
        this.router.navigate(["welcome"]);
      }

    })

  }
  logout() {
    this.auth.logout();
  }
  doLegal() {
    this.navctl.navigateForward('/legal-page');

  }
  doContactUs() {
    this.navctl.navigateForward('/tabs/contact-us');

  }
  doMyAccount() {
    this.navctl.navigateForward('/tabs/my-account');

  }
  doReportAnIssue() {
    this.navctl.navigateForward('/tabs/report-an-issue');

  }

  doBackEvent() {
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/tabs/tab1')) {

        // Show Exit Alert!
        console.log('Show Exit Alert!');
        this.showExitConfirm();
        processNextHandler();
      } else if (this._location.isCurrentPathEqualTo('/login')) {
        console.log('Show Exit Alert!');
        this.showExitConfirm();
        processNextHandler();
      }
      else {

        // Navigate to back page
        console.log('Navigate to back page');
        this._location.back();

      }

    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Handler called to force close!');
      this.alertController.getTop().then(r => {
        if (r) {
          navigator['app'].exitApp();
        }
      }).catch(e => {
        console.log(e);
      })
    });
  }
  showExitConfirm() {
    this.alertController.create({
      header: 'App termination',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }
  public isConnected(): boolean {
    let conntype = this.network.type;
    return conntype && conntype !== 'unknown' && conntype !== 'none';
  }

  public checkConn() {
    this.network.onDisconnect().subscribe(() => {
      // if (this.nav.getActive().component != NoNetworkPage) {
      //   this.app.getRootNav().push(NoNetworkPage);
      // }
      this.navctl.navigateForward('/network')
      // this.utility.showAlert("Network was disconnected ");
    });
    this.network.onConnect().subscribe(() => {
      // if (this.nav.getActive().component == NoNetworkPage) {
      //   this.app.getRootNav().pop();
      // }
      this.utility.presentToast("Network connected!");
      this.navctl.pop();
      //localStorage.removeItem('firebase:previous_websocket_failure');

    });
  }
}

