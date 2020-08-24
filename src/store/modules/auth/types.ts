export interface LoginForm {
    readonly email: string;
    readonly password: string;
}

type Role = "VIEWER" | "SELLER"  | string;

export type Route = {
    path: string;
    exact: boolean;
    component(): JSX.Element;
    isDefaultForCurrentUser(userRoles: Role[]): boolean;
    roles: Role[];
}

export interface AuthState {
    readonly loadingSignInRequest: boolean;
    readonly isSignedIn: boolean;
    readonly error: boolean;
    readonly token: string;
    readonly loginForm: LoginForm;
    readonly roles: string[];
    allRoutes: Route[];
    authorizedRoutes: Route[];
}


