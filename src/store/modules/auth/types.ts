import { IconType } from 'react-icons';

export interface LoginForm {
  readonly email: string;
  readonly password: string;
}

export type Role = 'VIEWER' | 'SELLER' | string;

export type Route = {
  path: string;
  exact: boolean;
  component(): JSX.Element;
  isDefaultForCurrentUser(userRoles: Role[]): boolean;
  roles: Role[];
  title: string;
  icon: JSX.Element;
  id: string;
};

export interface AuthState {
  readonly loadingSignInRequest: boolean;
  isSignedIn(): boolean;
  readonly error: boolean;
  token(): string | null;
  readonly loginForm: LoginForm;
  roles(): string[];
}
