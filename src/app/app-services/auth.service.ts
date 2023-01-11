import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User} from '../login/user';

import { JwtHelperService } from '@auth0/angular-jwt';
import { statusNumber } from './http-response-messages.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private  router: Router) { }
  jwtHelper: JwtHelperService = new JwtHelperService();
 
  private url: string = 'http://localhost:8080/api/auth';
  
  register(user: User): Observable<any>{
    return this.http.post<any>(`${this.url}/register`, user);
  }

  authenticate(user: User): Observable<any>{
      return this.http.post<any>(`${this.url}/authenticate`, user);
  }

  isAuthenticate(): Observable<any>{
    return this.http.get<any>(`${this.url}/`)
  }

  getToken(){
    const tokenJSON = localStorage.getItem('acess-token');
    if(tokenJSON){
      const token = JSON.parse(tokenJSON)!.token
      return token;
    }
    return null;
  }

  isAuthenticated(): boolean{
    let isAuthenticated = false;
    const token = this.getToken();
    if(token){
    const expired = this.jwtHelper.isTokenExpired(token);
    isAuthenticated = !expired;
    }
    return isAuthenticated;
  }

  
 
}
