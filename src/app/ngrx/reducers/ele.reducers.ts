import {EleState, initialEleState} from '../states/ele.states';
import {AllEleTypes, EleActionTypes} from '../actions/ele.actions';
import {createFeatureSelector} from '@ngrx/store';

export function eleStateReducer(state = initialEleState, action: AllEleTypes): EleState {
  switch (action.type) {
    case EleActionTypes.UPDATE_ELE: {
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        color: action.payload.color
      };
    }
    case EleActionTypes.UPDATE_STYLE: {
      return {
        ...state,
        // id: action.payload.id,
        // name: action.payload.name,
        color: action.payload.color
      };
    }
    default: {
      return state;
    }
  }
}

export const eleStateReducers = {
  ele: eleStateReducer
};

export const selectEleState = createFeatureSelector<EleState>('ele');
