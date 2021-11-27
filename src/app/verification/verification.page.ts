import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ServicesService } from '../providers/services.service';
import { UtilityService } from '../providers/utility.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
  auth_token: any;
  userId: any;
  codeOne: any;
  codeTwo: any;
  codeThree: any;
  codeFour: any;
  cafeCode: any;
  constructor(
    public menu: MenuController,
    public navctl: NavController,
    public service: ServicesService,
    public utility: UtilityService,
    private storage: Storage,

  ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    //this.menu.enable(false);
    this.userId = localStorage.getItem('userId');
  }
  doAddCafe() {
    this.cafeCode = this.codeOne + this.codeTwo + this.codeThree + this.codeFour;
    console.log(this.cafeCode);

    this.storage.get("auth_token").then(val => {
      console.log(val);

      this.auth_token = val;

      let formdata = new FormData();
      formdata.append('cafe_code', this.cafeCode);
      formdata.append('user_id', this.userId);
      formdata.append('token', this.auth_token);
      this.service.doAddCafe(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res);
          localStorage.setItem('userStatus', "old_user");
          localStorage.setItem('cafe_id', res.data.added_cafe_id);
          this.navctl.navigateForward('/tabs/tab1');
          this.codeOne = '';
          this.codeTwo = '';
          this.codeThree = '';
          this.codeFour = '';
          this.cafeCode = '';

        } else {
          this.codeOne = '';
          this.codeTwo = '';
          this.codeThree = '';
          this.codeFour = '';
          this.cafeCode = '';
          this.utility.presentToast(res.message);
        }
      });

    });
  }

  // next(el) {
  //   el.setFocus();
  // }
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
}
