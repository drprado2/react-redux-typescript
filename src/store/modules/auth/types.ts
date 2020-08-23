export interface LoginForm {
    readonly email: string;
    readonly password: string;
}

export interface AuthState {
    readonly loadingSignInRequest: boolean;
    readonly isSignedIn: boolean;
    readonly error: boolean;
    readonly token: string;
    readonly loginForm: LoginForm;
}

