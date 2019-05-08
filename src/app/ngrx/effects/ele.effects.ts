import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {EleActionTypes, UpdateStyle} from '../actions/ele.actions';
import {map} from 'rxjs/operators';
import {tap} from 'rxjs/internal/operators/tap';
import {WorkspaceService} from '../../services/communication/workspace.service';

@Injectable()
export class EleEffects {
  constructor(
    private actions: Actions,
    private workspaceService :WorkspaceService
  ) {
  }

  @Effect({dispatch: false})
  UpdateStyle: Observable<any> = this.actions.pipe(
    ofType(EleActionTypes.UPDATE_STYLE),
    map((action: UpdateStyle)=>action.payload.color),
    tap(color=>this.workspaceService.updateStyle(color))
  );
}
