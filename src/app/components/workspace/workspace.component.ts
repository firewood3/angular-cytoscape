import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthState} from '../../ngrx/states/auth.states';
import {GetStatus} from '../../ngrx/actions/auth.actions';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
    this.store.dispatch(new GetStatus);
  }

}
