import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AuthState} from '../../ngrx/states/auth.states';
import {selectAuthState} from '../../ngrx/reducers/auth.reducers';
import {LogIn} from '../../ngrx/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string;
  userPw: string;
  authState: Observable<any>;
  errorMessage: string | null;

  constructor(private store: Store<AuthState>) {
    this.authState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.authState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit(): void {
    const payload = {
      userId: this.userId,
      userPw: this.userPw
    };
    this.store.dispatch(new LogIn(payload));
  }
}
