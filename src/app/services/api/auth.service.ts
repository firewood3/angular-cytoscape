import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user';

@Injectable()
export class AuthService {

  private BASE_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(userId: string, userPw: string): Observable<any> {
    const url = `${this.BASE_URL}/auth/login`;
    return this.httpClient.post<User>(url, {userId, userPw});
  }

  getStatus(): Observable<User> {
    const url = `${this.BASE_URL}/auth/status`;
    return this.httpClient.get<User>(url);
  }
}
