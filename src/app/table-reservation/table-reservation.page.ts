import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-table-reservation',
  templateUrl: './table-reservation.page.html',
  styleUrls: ['./table-reservation.page.scss'],
})
export class TableReservationPage implements OnInit {

  constructor(public menu: MenuController) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menu.enable(true);
   }
}
