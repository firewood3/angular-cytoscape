import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LoginService {

  private loginUrl = 'http://localhost:8080/auth/login';

  constructor(private httpClient: HttpClient) { }

  login(id: string, password: string): Observable<any> {
    return this.httpClient.post(this.loginUrl, {id, password});
  }
}
