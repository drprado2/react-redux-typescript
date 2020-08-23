import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {AuthState, LoginForm} from "./types";

const initialState: AuthState = {
    loadingSignInRequest: false,
    isSignedIn: false,
    error: false,
    token: '',
    loginForm: {
        email: '',
        password: ''
    }
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInRequest(state, action: PayloadAction<LoginForm>) {
            state.loadingSignInRequest = true;
        },
        signInSuccess(state, action: PayloadAction<{token: string}>) {
            state.loadingSignInRequest = false;
            state.isSignedIn = true;
            state.token = action.payload.token;
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
    signInFailure
} = authSlice.actions;

export default authSlice.reducer;

