import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'; @Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  apiUrl: any;
  httpOptions: any;
  token: any;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  doRegistration(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}Authentication/registration`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }

  getlogout(token) {
    return this.httpClient.get(`${this.apiUrl}Authentication/logout?token=${token}`);
  }
 
  doCafeMenu(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}Authentication/cafeMenu`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }
  doAddCafe(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}User/addCafe`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }
  doCafeList(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}User/cafeList`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }
  doAddBooking(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}User/addBooking`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }
  doGetNotificationStatus(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}User/getNotificationStatus`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }
  doChangeNotificationStatus(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}User/changeNotificationStatus`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }
  doDeleteCustomer(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}User/deleteCustomer`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }
  doUserdDashboard(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}User/userdashboard`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }
  doCancleBooking(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}User/cancleBooking`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }
  doforgotPassword(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}User/forgotPassword`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }
  doUpdatePassword(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}User/updatePassword`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }
  
}
