import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AuthState, LoginForm, Route} from "./types";
import Home from '../../../pages/Home';

const allRoutes: Route[] = [
    {
        component: Home,
        exact: true,
        path: '/home/:companyId',
        isDefaultForCurrentUser: roles => roles.includes("VIEWER"),
        roles: ["VIEWER"]
    }
];

const initialState: AuthState = {
    loadingSignInRequest: false,
    isSignedIn: false,
    error: false,
    token: '',
    roles: [],
    loginForm: {
        email: '',
        password: ''
    },
    allRoutes: allRoutes,
    authorizedRoutes: [],
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
        signInSuccess(state, action: PayloadAction<{ token: string, roles: string[] }>) {
            const {token, roles}  = action.payload;
            state.loadingSignInRequest = false;
            state.isSignedIn = true;
            state.roles = roles;
            state.token = token;
            state.authorizedRoutes = allRoutes.filter(route => roles.some((userRole: string) => route.roles.indexOf(userRole) > -1))
        },
        signInFailure(state, action: PayloadAction) {
            state.loadingSignInRequest = false;
            state.error = true;
        }
    }
})

export const {
    signInSuccess,
    signInRequest,
    signInFailure,
    signOutRequest
} = authSlice.actions;

export default authSlice.reducer;

