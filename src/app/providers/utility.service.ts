import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(public toastController: ToastController,public alertController: AlertController) { }
  alert: any;
  auth_token:any;
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }  
  
  public logout() {
    return Observable.create(observer => {
     this.auth_token = "";
      // this.menu.enable(false);
      observer.next(true);
      observer.complete();
    });
  }
  async showAlert(message) {
    this.alert = await this.alertController.create({
      header: 'Alert',
      message: message,
      buttons: ['OK']
    });

    await this.alert.present();
  }
}
