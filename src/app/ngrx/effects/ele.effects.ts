import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {EleActionTypes, UpdateStyle} from '../actions/ele.actions';
import {map} from 'rxjs/operators';

@Injectable()
export class EleEffects {
  constructor(
    private actions: Actions
  ) {
  }

  @Effect({dispatch: false})
  UpdateStyle: Observable<any> = this.actions.pipe(
    ofType(EleActionTypes.UPDATE_STYLE),
    map((action: UpdateStyle)=>action.payload.color)
  );
}
