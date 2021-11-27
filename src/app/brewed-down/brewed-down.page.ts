import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController, Platform } from '@ionic/angular';
import { ServicesService } from '../providers/services.service';
import { UtilityService } from '../providers/utility.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../providers/authentication-service.service';
import { LoaderService } from '../loader.service';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-brewed-down',
  templateUrl: './brewed-down.page.html',
  styleUrls: ['./brewed-down.page.scss'],
})
export class BrewedDownPage implements OnInit {
  numberOfPeopleCount: any = 1;
  bookingTime: any;
  auth_token: any;
  userId: any;
  selectedDate: any;
  cafe_id: any;
  bookedStatus: any;
  cafe_counter: any;
  day: any;
  booking_time: any;
  number_of_people: any;
  cafe_name: any;
  cafe_logo: any;
  image_path: any;
  is_birthday: any;
  offer_path: any;
  offers: any = [];
  notification: any = [];
  banner_notification: any = [];
  coffeeProgress: any;
  today: any;
  birthday_code: any;
  banner_color: any;
  banner_info: any;
  constructor(public menu: MenuController,
    public navctl: NavController,
    public service: ServicesService,
    public utility: UtilityService,
    private storage: Storage,
    public alertController: AlertController,
    public router: Router,
    public auth: AuthenticationServiceService,
    public loderService: LoaderService,
    public datepipe: DatePipe,
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
  }
  ionViewWillEnter() {
    this.menu.enable(true);
    const now = new Date();
    this.today = new Date();
    this.today = this.datepipe.transform(this.today, 'yyyy-MM-dd');
    this.userId = localStorage.getItem('userId');
    this.cafe_id = localStorage.getItem('cafe_id');
    this.doUserdDashboard();
  }
  doQrCode() {
    this.navctl.navigateForward('/tabs/qr-code');
  }
  doCafeMenu() {
    //this.navctl.navigateForward('/tabs/cafe-menu')
    this.router.navigate(['/tabs/cafe-menu' ,{cafe_name: this.cafe_name}]);
  }
  numberOfPeopleRemoveCount() {
    if (this.numberOfPeopleCount > 1) {
      this.numberOfPeopleCount = this.numberOfPeopleCount - 1;
    }
  }
  numberOfPeopleAddCount() {
    this.numberOfPeopleCount = this.numberOfPeopleCount + 1;
  }
  doAddBooking() {
    if (this.bookingTime != null && this.selectedDate != null && this.numberOfPeopleCount != null) {
      this.storage.get("auth_token").then(val => {
        console.log(val);
        this.auth_token = val;
        let formdata = new FormData();
        formdata.append('user_id', this.userId);
        formdata.append('token', this.auth_token);
        formdata.append('cafe_id', this.cafe_id);
        
        let d = this.bookingTime.split('T')[1];

        let m = d.split(':')[0];
      
        let n = d.split(':')[1];
      
        var AmOrPm = m >= 12 ? 'pm' : 'am';
      
        m = (m % 12) || 12;
      
        this.bookingTime = m + ":" + n + " " + AmOrPm;

        formdata.append('time', this.bookingTime);
        formdata.append('booking_date', this.selectedDate);
        formdata.append('number_of_people', this.numberOfPeopleCount);
        this.service.doAddBooking(formdata).subscribe(res => {
          if (res.status == true) {
            console.log(res);
            this.doUserdDashboard();
            this.navctl.navigateForward('/tabs/booking-success'
              , {
                queryParams: {
                  day: this.day,
                  number_of_people: this.number_of_people,
                  cafe_name: this.cafe_name,
                  booking_time: this.booking_time,
                },
              });
            this.utility.presentToast(res.message);
          } else {
            this.utility.presentToast(res.message);
          }
        });
      });
    } else {
      this.utility.presentToast("Please add all information");
    }
  }
  doUserdDashboard() {
    this.storage.get("auth_token").then(val => {
      console.log(val);
      this.auth_token = val;
      let formdata = new FormData();
      formdata.append('user_id', this.userId);
      formdata.append('token', this.auth_token);
      formdata.append('cafe_id', this.cafe_id);
     // this.loderService.presentLoading();
      this.service.doUserdDashboard(formdata).subscribe(res => {
        if (res.status == true) {
          // console.log(res);
          this.notification = res.data.notification;
          this.banner_notification = res.data.banner_notification;
          this.banner_color = res.data.banner_notification[0].banner_color;
          this.banner_info = res.data.banner_notification[0].banner_info;
       
          
          this.image_path = res.data.image_path;
          this.cafe_logo = res.data.cafe_details.cafe_logo;
          this.cafe_name = res.data.cafe_details.cafe_name;
          this.bookedStatus = res.data.isbooked;
          this.cafe_counter = ((res.data.cafe_counter) - (res.data.user_counter));
          this.coffeeProgress = (res.data.user_counter / (res.data.cafe_counter)) * 100;
          if (res.data.booking_data != null) {
            this.day = res.data.booking_data.day;
            this.booking_time = res.data.booking_data.booking_time;
            this.number_of_people = res.data.booking_data.number_of_people;

          }
          this.offers = res.data.offers;
          this.birthday_code = res.data.birthday_code;

          this.offer_path = res.data.offer_path;
          this.is_birthday = res.data.is_birthday;
        //  this.loderService.dismiss();
        
        } else {
         // this.loderService.dismiss();
          this.utility.presentToast(res.message);
          this.auth.logout();
        }
      });
    });

  }

  date(selectedDate) {
    this.selectedDate = selectedDate;
    console.log(this.selectedDate);
  }

  doCancleBooking() {
    this.storage.get("auth_token").then(val => {
      console.log(val);
      this.auth_token = val;
      let formdata = new FormData();
      formdata.append('user_id', this.userId);
      formdata.append('token', this.auth_token);
      formdata.append('cafe_id', this.cafe_id);

      this.service.doCancleBooking(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res);
          this.doUserdDashboard();
          this.utility.presentToast(res.message);
        } else {
          this.utility.presentToast(res.message);
        }
      });
    });

  }
  doBirthdayCoffee() {
    console.log(this.birthday_code);
    
    this.router.navigate(['/tabs/birthday-coffee' ,{birthday_code: this.birthday_code, cafe_name: this.cafe_name}]);
  }
  async presentConfirm() {
    let alert = await this.alertController.create({
      subHeader: 'Booking cancel confirmation',
      message: 'Are you sure you want to cancel this booking?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ok',
          handler: () => {
            this.doCancleBooking();
          }
        }
      ]
    });
    alert.present();
  }
  gotoNotificationDetails(){
    console.log('gotoNotificationDetails');
    this.navctl.navigateForward(['/tabs/notification-more-information',{cafe_name: this.cafe_name, banner_info: this.banner_info}])
    
  }
}
