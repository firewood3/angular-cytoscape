import {All, AuthActionTypes} from '../actions/auth.actions';
import {initialAuthState, AuthState} from '../states/auth.states';
import {createFeatureSelector} from '@ngrx/store';

export function userStateReducer(state = initialAuthState, action: All): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          userId: action.payload.userId,
          token: action.payload.token
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.'
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialAuthState;
    }
    default: {
      return state;
    }
  }
}

export const authStateReducers = {
  auth: userStateReducer
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');
