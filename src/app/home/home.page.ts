import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public navctl:NavController,
    public menu: MenuController,
    public router:Router,
  ) {}
  doBrewedDown(){
    this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
//this.navctl.navigateForward('/brewed-down')
  }
  ionViewDidEnter(){
    
    
    this.menu.enable(true);
   }
}
