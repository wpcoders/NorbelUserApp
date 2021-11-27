import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { ServicesService } from 'src/app/providers/services.service';
import { UtilityService } from 'src/app/providers/utility.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  registrationForm: FormGroup;
  dobDate:any;
  privacyPolicy:any = false;
  constructor(public navCtl: NavController,
    public menu: MenuController,
    public service: ServicesService,
    public router: Router,
    public utility:UtilityService ) {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required,]),
      password: new FormControl('', [Validators.required,]),
      dob: new FormControl('', [Validators.required,]),
    });
  
   }
   ionViewDidEnter(){
    this.menu.enable(false);
   }
  ngOnInit() {
  }
  doRegistration(data){
    console.log(data);
    if (this.registrationForm.valid) {
      let formdata = new FormData();
      formdata.append('user_email', data.email);
      formdata.append('user_name', data.name);
      formdata.append('user_dob', data.dob);
      formdata.append('user_password', data.password);
      if(this.privacyPolicy == true){
      this.service.doRegistration(formdata).subscribe(res => {
      if (res.status == true) {
     console.log(res);
     this.utility.presentToast(res.message);
       
     this.router.navigateByUrl('/login');
      }else{

        this.utility.presentToast(res.message);
       }
    });
  }else{
    this.utility.presentToast("Please accept privacy policy");
  }
    }
    else {
        console.log('form errr');
        Object.keys(this.registrationForm.controls).forEach(field => {
          const control = this.registrationForm.get(field);
          control.markAsTouched({ onlySelf: true });
        })
    }    
  }
  doLogin(){
    this.router.navigateByUrl('/login');
  }
  date(dobDate){
    this.dobDate = dobDate;
       console.log(this.dobDate);
  }
  doPrivacyPolicy(){
    this.router.navigate(['/legal-page', { state:'registration' }]);
  }
  getPrivacyPolicy(e){
if(this.privacyPolicy == false){
this.privacyPolicy = true;
}else{
  this.privacyPolicy = false;
}
console.log(this.privacyPolicy);

  }
} 
