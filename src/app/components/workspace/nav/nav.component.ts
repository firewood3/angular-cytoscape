import { Component, OnInit } from '@angular/core';
import {LogOut} from '../../../ngrx/actions/auth.actions';
import {selectAuthState} from '../../../ngrx/reducers/auth.reducers';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AuthState} from '../../../ngrx/states/auth.states';
import {EleState} from '../../../ngrx/states/ele.states';
import {selectEleState} from '../../../ngrx/reducers/ele.reducers';
import {CyNode} from '../../../models/node';
import {UpdateStyle} from '../../../ngrx/actions/ele.actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  authState: Observable<any>;
  eleState: Observable<any>;

  cyNode = new CyNode();

  constructor(private store: Store<AuthState>, public eleStore: Store<EleState>) {
    this.authState = this.store.select(selectAuthState);
    this.eleState = this.store.select(selectEleState);
  }

  ngOnInit() {
    this.eleStore.subscribe({
      next: value => {
        // @ts-ignore
        this.cyNode.id = value.ele.id;
        // @ts-ignore
        this.cyNode.name = value.ele.name;
        // @ts-ignore
        this.cyNode.color = value.ele.color;
        console.log(value);
        // @ts-ignore
        // if(value.ele.color === 'rgb(255,255,255)') {
        //   this.cyNode.color = 'white';
        //   // @ts-ignore
        // } else if(value.ele.color === 'rgb(0,0,255)') {
        //   this.cyNode.color = 'blue';
        //   // @ts-ignore
        // } else if(value.ele.color === 'rgb(0,128,0)') {
        //   this.cyNode.color = 'green';
        //   // @ts-ignore
        // } else if(value.ele.color === 'rgb(255,0,0)') {
        //   this.cyNode.color = 'red';
        // }
      }
    });
  }

  logout(): void {
    this.store.dispatch(new LogOut);
  }

  clickColor(color: string) {
    const payload = {
      color: color
    };
    this.eleStore.dispatch(new UpdateStyle(payload));
    // console.log(classes);
  }
}
