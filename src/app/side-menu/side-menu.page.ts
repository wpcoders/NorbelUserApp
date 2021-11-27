import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  constructor(public menu: MenuController) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.menu.enable(true);
    
  }

}
