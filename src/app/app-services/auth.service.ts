import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User} from '../login/user';

import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  jwtHelper: JwtHelperService = new JwtHelperService();
 
  private url: string = 'http://localhost:8080/api/auth';
  
  register(user: User): Observable<any>{
    return this.http.post<any>(`${this.url}/register`, user);
  }

  authenticate(user: User): Observable<any>{
      return this.http.post<any>(`${this.url}/authenticate`, user);
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
    const token = this.getToken();
    if(token){
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }
 
}
