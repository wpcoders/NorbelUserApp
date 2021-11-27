import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
import { Router, ActivatedRoute, Route } from '@angular/router';
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {
  encodeData: any = "any";
  userId: any;
  userCode: any;
  birthday_code: any;
  createdCode = null;
  constructor(public menu: MenuController,
    public navctl: NavController,
    private barcodeScanner: BarcodeScanner,
    public route: Router,
    public activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
  }
  createCode() {
    this.createdCode = this.userCode;
    console.log(this.createdCode);
  }

  ionViewDidEnter() {
    this.menu.enable(true);
    this.birthday_code = this.activatedRoute.snapshot.paramMap.get('birthday_code');
    console.log(this.birthday_code);
    
    this.userId = localStorage.getItem('userId');
    if (this.birthday_code != null) {
      this.userCode = this.birthday_code;
    } else {
      this.userCode = localStorage.getItem('userCode');
    }
    console.log(this.userId);

    this.createCode();

  }
  doBack() {
    this.navctl.back();
  }
}
