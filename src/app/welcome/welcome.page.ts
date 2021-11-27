import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public navCtl: NavController,
    public router: Router,
    public menu:MenuController,
    
    private storage: Storage) { }

  ngOnInit() {
    // this.storage.get('auth_token').then(res => {
    //   console.log(res);
    //   })
  }
  ionViewDidEnter(){
    this.menu.enable(false);
 //   this.router.navigateByUrl('/tabs');
   }
  doRegistrationPage(){
    //this.navCtl.navigateForward('/registration');
    this.router.navigateByUrl('/registration');
  }
}
