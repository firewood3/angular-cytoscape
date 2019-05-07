import {Action} from '@ngrx/store';

export enum EleActionTypes {
  UPDATE_ELE = '[Ele] update-ele',
  UPDATE_STYLE = '[Ele] update-style'
}

export class UpdateEle implements Action {
  readonly type = EleActionTypes.UPDATE_ELE;
  constructor(public payload: any) {}
}

export class UpdateStyle implements Action {
  readonly type = EleActionTypes.UPDATE_STYLE;
  constructor(public payload: any) {}
}

export type AllEleTypes =
  | UpdateEle
  | UpdateStyle;
