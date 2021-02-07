import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AuthState, LoginForm, Role, Route,
} from './types';
import Home from '../../../pages/Home';

export const allRoutes: Route[] = [
  {
    component: Home,
    exact: true,
    path: '/home',
    isDefaultForCurrentUser: (roles) => roles.includes('VIEWER'),
    roles: ['VIEWER'],
  },
];

export const authorizedRoutes = (roles: Role[]) => allRoutes.filter((route) =>
  roles.some((userRole: string) => route.roles.indexOf(userRole) > -1));

const initialState: AuthState = {
  loadingSignInRequest: false,
  isSignedIn: false,
  error: false,
  token: '',
  roles: [],
  loginForm: {
    email: '',
    password: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInRequest(state, action: PayloadAction<LoginForm>) {
      state.loadingSignInRequest = true;
    },
    signOutRequest(state, action: PayloadAction) {
      state.isSignedIn = false;
      state.token = '';
    },
    signInSuccess(
      state,
      action: PayloadAction<{ token: string; roles: string[] }>,
    ) {
      const { token, roles } = action.payload;
      state.loadingSignInRequest = false;
      state.isSignedIn = true;
      state.roles = roles;
      state.token = token;
    },
    signInFailure(state, action: PayloadAction) {
      state.loadingSignInRequest = false;
      state.error = true;
    },
    setLoginEmail(state, action: PayloadAction<string>) {
      state.loginForm.email = action.payload;
    },
    setLoginPassword(state, action: PayloadAction<string>) {
      state.loginForm.password = action.payload;
    },
  },
});

export const {
  signInSuccess,
  signInRequest,
  signInFailure,
  signOutRequest,
  setLoginEmail,
  setLoginPassword,
} = authSlice.actions;

export default authSlice.reducer;
