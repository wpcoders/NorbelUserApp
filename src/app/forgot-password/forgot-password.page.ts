import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { AuthenticationServiceService } from '../providers/authentication-service.service';
import { ServicesService } from '../providers/services.service';
import { UtilityService } from '../providers/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgotPasswordForm: FormGroup;
  otp:any;
  constructor(public navCtl: NavController,
    public menu: MenuController,
    public service: ServicesService,
    public utility:UtilityService,
    public router: Router, ) {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required,]),

    });

  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.menu.enable(false);
  }
  doForgotPassword(data) {
  
    if (this.forgotPasswordForm.valid) {
      let formdata = new FormData();
      formdata.append('email_id', data.email);
      this.service.doforgotPassword(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res);
           this.otp = res.otp;
           localStorage.setItem('otp', res.otp);
           localStorage.setItem('email', data.email);
          this.utility.presentToast(res.message);  
          this.router.navigate(['/reset-password',{otp : this.otp}]);
        }
        else{
          this.utility.presentToast(res.message);          
        }
      });

    }
    else {
      console.log('form errr');
      Object.keys(this.forgotPasswordForm.controls).forEach(field => {
        const control = this.forgotPasswordForm.get(field);
        control.markAsTouched({ onlySelf: true });
      })
    }
  }
}
