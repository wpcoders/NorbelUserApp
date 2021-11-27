import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, MenuController, NavController, Platform } from '@ionic/angular';
import { ServicesService } from 'src/app/providers/services.service';
import { UtilityService } from 'src/app/providers/utility.service';
import { AuthenticationServiceService } from '../providers/authentication-service.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import OneSignal from 'onesignal-cordova-plugin';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(public navCtl: NavController,
    public menu: MenuController,
    public service: AuthenticationServiceService,
    public utility: UtilityService,
    public storage: Storage,
    public router: Router,
    ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,]),
      password: new FormControl('', [Validators.required,]),

    });
  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.menu.enable(false);
    
  }
  doRegistration() {
    this.navCtl.navigateForward('/registration');
  }
  doForgotPassword() {
    this.navCtl.navigateForward('/forgot-password');
  }
  doVerification() {



  }
  doLogin(data) {

    if (this.loginForm.valid) {
      //      this.navCtl.navigateForward('/verification');

      let formdata = new FormData();
      formdata.append('user_email', data.email);
      formdata.append('user_password', data.password);
      this.service.doLogin(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res);
          localStorage.setItem('auth_token', res.data.JWT_Token);
          localStorage.setItem('userId', res.data.uId);
          localStorage.setItem('userCode', res.data.uCode);
          localStorage.setItem('userStatus', res.data.user_status);
          localStorage.setItem('cafe_id', res.data.added_cafe_id);
          this.storage.set('auth_token', res.data.JWT_Token);
        //  OneSignal.sendTag('user_id', res.data.uId);
          console.log();
          if(res.data.user_status == 'new_user'){
            this.router.navigateByUrl('/tabs/verification');
          }else{
          this.router.navigateByUrl('/tabs/tab1');
          }
        } else {
          this.utility.presentToast(res.message);
        }
      });
    } else {
      console.log('form errr');
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control.markAsTouched({ onlySelf: true });
      })
    }
  }


}