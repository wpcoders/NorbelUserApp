import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../providers/services.service';
import { NavController, MenuController } from '@ionic/angular';
import { UtilityService } from '../providers/utility.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  forgotPasswordForm: FormGroup;
  userId: any;
  codeOne: any;
  codeTwo: any;
  codeThree: any;
  codeFour: any;
  otp: any;
  getotp: any;
  email: any;
  otpStatus: any = false;

  constructor(
    public menu: MenuController,
    public navctl: NavController,
    public service: ServicesService,
    public utility: UtilityService,
    public activatedRoute: ActivatedRoute,
  ) { 
    this.forgotPasswordForm = new FormGroup({
      // email: new FormControl('', [Validators.required,]),
      password: new FormControl('', [Validators.required,]),
      confirmPassword: new FormControl('', [Validators.required,]),

    });
  }

  ngOnInit() {
   
  }
  ionViewWillEnter(){
    //this.getotp = this.activatedRoute.snapshot.paramMap.get('otp');
    this.getotp = localStorage.getItem('otp');
    this.email = localStorage.getItem('email');
  }
  otpController(event, next, prev) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus()
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      return 0;
    }
  }
  doCheckOtp() {
    this.otp = this.codeOne + this.codeTwo + this.codeThree + this.codeFour;
   if(this.getotp == this.otp){
     this.otpStatus = true;
   }
   else{
     this.otpStatus =  false;
     this.utility.presentToast("Please enter valid otp");
   }
  }
  doResend(){
    this.navctl.back();
  }
  doForgotPassword(data) {
    if (this.forgotPasswordForm.valid) {
      if (data.password == data.confirmPassword) {
        let formdata = new FormData;
        formdata.append('email_id', this.email);
        formdata.append('password', data.confirmPassword);

        this.service.doUpdatePassword(formdata).subscribe(res => {
          if (res.status == true) {
            this.navctl.navigateForward('/login');
            this.utility.presentToast(res.message);
          } else {
            this.utility.presentToast(res.message);
          }


        });
      } else {
        this.utility.presentToast("please check password and confirm password ");

      }
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

