import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {EleActionTypes, UpdateStyle} from '../actions/ele.actions';
import {tap} from 'rxjs/internal/operators/tap';
import {map} from 'rxjs/operators';
import {LogIn} from '../actions/auth.actions';

@Injectable()
export class EleEffects {

  constructor(
    private actions:Actions,
  ) {}

  @Effect({dispatch: false})
  UpdateStyle: Observable<any> = this.actions.pipe(
    ofType(EleActionTypes.UPDATE_STYLE),
    map((action: UpdateStyle) => action.payload),
    tap(value=> {
      console.log('effect', value);

    })
  );

}
