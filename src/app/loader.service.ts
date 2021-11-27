import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loading: any;
  isLoading = false;
  private isShowing = false;
  constructor(public loadingController: LoadingController) { }
  async presentLoading() {
    this.isLoading = true;
     this.loading = await this.loadingController.create({
     // message: 'Please wait...',
      //duration: 2000
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
    
      });
    })
    
  }
  async dismiss(){
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
}
