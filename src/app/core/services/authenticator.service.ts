import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IUser } from 'src/app/shared/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  API_URL: string = 'http://localhost:5200';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private _httpClient: HttpClient, public _router: Router) { 
    console.log('Already initiated')
    // if(_auth) {
    //   throw new Error(
    //     'Authenticator Service is already loaded'
    //   )
    // }
  } 

  test() {
    console.log('test')
  }

  register(user: IUser) {
    return this._httpClient.post(`${this.API_URL}/users/register`, user).pipe(
      catchError((err, caught) => {
        return err;
      })
    )
  }

  login(user: IUser) {
    return this._httpClient.post<any>(`${this.API_URL}/users/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
        this.getUserProfile(res._id).subscribe((res) => {
          //Do something
        })
      })
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this._router.navigate(['users/login']);
    }
  }

  getUserProfile(id): Observable<void> {
    return this._httpClient.get(`${this.API_URL}/users/profile/${id}`, { headers: this.headers }).pipe(
    map(response => {
      //Do Somethinf
    })
    )
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    throw new Error(msg);
  }
}
