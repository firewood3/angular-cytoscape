import { Component, OnInit } from '@angular/core';
import {LogOut} from '../../../ngrx/actions/auth.actions';
import {selectAuthState} from '../../../ngrx/reducers/auth.reducers';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AuthState} from '../../../ngrx/states/auth.states';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  authState: Observable<any>;

  constructor(private store: Store<AuthState>) {
    this.authState = this.store.select(selectAuthState);
  }

  ngOnInit() {}

  logout(): void {
    this.store.dispatch(new LogOut);
  }
}
