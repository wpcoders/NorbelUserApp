import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicesService } from './services.service';
import { UtilityService } from './utility.service';
import { Storage } from '@ionic/storage-angular';
const TOKEN_KEY = 'auth_token';

import { catchError, map } from 'rxjs/operators';@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  authenticationState = new BehaviorSubject(false);
  apiUrl: any;
  auth_token: any;
  constructor(private storage: Storage, private plt: Platform, public httpClient: HttpClient,
    public menu: MenuController, public utility: UtilityService, public service: ServicesService,) {
      this.apiUrl = environment.apiUrl;
    this.plt.ready().then(() => {
      this.checkToken();
    });
     }
     checkToken() {
      this.storage.get(TOKEN_KEY).then(res => {
        console.log(res);
        if (res) {
          this.authenticationState.next(true);
        }
      })
    }
    doLogin (data):Observable<any> {
      return this.httpClient.post(`${this.apiUrl}Authentication/login`,data).pipe(
         map(response =>{
                      return response;
         }),
     );
    }
    isAuthenticated() {
      return this.authenticationState.value;
    }
  
    private handleError(error: HttpErrorResponse) {
      // TODO: seems we cannot use messageService from here...
      let errMsg = (error.message) ? error.message : 'Server error';
      console.error(errMsg);
      if (error.status === 401) {
        window.location.href = '/';
      }
      return Observable.throw(errMsg);
    }
  
  
    logout() {
      this.storage.get("auth_token").then(val => {
        console.log(val);
        
        this.auth_token = val;
      
        this.service.getlogout(this.auth_token).subscribe((res: any) => {
          return this.storage.remove(TOKEN_KEY).then(() => {
            this.authenticationState.next(false);
            this.utility.logout();
          })
        })
      
      })
    }
    
    
}
