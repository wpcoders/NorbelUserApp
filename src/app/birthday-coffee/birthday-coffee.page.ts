import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
@Component({
  selector: 'app-birthday-coffee',
  templateUrl: './birthday-coffee.page.html',
  styleUrls: ['./birthday-coffee.page.scss'],
})
export class BirthdayCoffeePage implements OnInit {
  createdCode = null;
  userCode: any;
  birthday_code: any;
  cafe_name: any;
  constructor(public navctl:NavController,
    public activatedRoute: ActivatedRoute,
    private barcodeScanner: BarcodeScanner,
    ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.cafe_name = this.activatedRoute.snapshot.paramMap.get('cafe_name');
    this.userCode = this.activatedRoute.snapshot.paramMap.get('birthday_code');
    this.createCode();
  }
doBack(){
  this.navctl.back();
}
createCode() {
  this.createdCode = this.userCode;
  console.log(this.createdCode);
}
}
