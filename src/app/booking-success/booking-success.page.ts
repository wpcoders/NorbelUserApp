import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.page.html',
  styleUrls: ['./booking-success.page.scss'],
})
export class BookingSuccessPage implements OnInit {
  day: any;
  number_of_people: any;
  cafe_name: any;
  booking_time: any;

  constructor(public menu: MenuController ,
    public navctl: NavController,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menu.enable(true);
    this.route.queryParams.subscribe((params) => {
      console.log('params: ', params);
      this.day =  params.day;
      this.number_of_people =  params.number_of_people;
      this.cafe_name = params.cafe_name;
      this.booking_time = params.booking_time;
    });
    
  
   }
   goBack(){
     this.navctl.back();
   }
}
