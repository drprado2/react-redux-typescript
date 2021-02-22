import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FaBeer } from 'react-icons/fa';
import { GiCardAceHearts } from 'react-icons/gi';
import {
  AuthState, LoginForm, Role, Route,
} from './types';
import HomePage from '../../../pages/Home';
import CardsPage from '../../../pages/Cards';

export const allRoutes: Route[] = [
  {
    id: 'home',
    component: HomePage,
    exact: true,
    path: '/home',
    isDefaultForCurrentUser: (roles) => roles.includes('VIEWER'),
    roles: ['VIEWER'],
    title: 'Home',
    icon: <FaBeer />,
  },
  {
    id: 'cards',
    component: CardsPage,
    exact: true,
    path: '/cards',
    isDefaultForCurrentUser: (roles) => false,
    roles: ['VIEWER'],
    title: 'Cartões',
    icon: <GiCardAceHearts />,
  },
];

const authTokenKey = 'auth:token';
const authRolesKey = 'auth:roles';

export const authorizedRoutes = (roles: Role[]) => allRoutes.filter((route) =>
  roles.some((userRole: string) => route.roles.indexOf(userRole) > -1));

const initialState: AuthState = {
  loadingSignInRequest: false,
  isSignedIn: () => !!localStorage.getItem(authTokenKey),
  error: false,
  token: () => localStorage.getItem(authTokenKey),
  roles: () => JSON.parse(localStorage.getItem(authRolesKey) ?? '[]'),
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
      localStorage.removeItem(authTokenKey);
      localStorage.removeItem(authRolesKey);
      state.token = () => localStorage.getItem(authTokenKey);
      state.isSignedIn = () => !!localStorage.getItem(authTokenKey);
      state.roles = () => JSON.parse(localStorage.getItem(authRolesKey) ?? '[]');
    },
    signInSuccess(
      state,
      action: PayloadAction<{ token: string; roles: string[] }>,
    ) {
      const { token, roles } = action.payload;
      localStorage.setItem(authTokenKey, token);
      localStorage.setItem(authRolesKey, JSON.stringify(roles));

      state.loadingSignInRequest = false;
      state.token = () => localStorage.getItem(authTokenKey);
      state.isSignedIn = () => !!localStorage.getItem(authTokenKey);
      state.roles = () => JSON.parse(localStorage.getItem(authRolesKey) ?? '[]');
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
