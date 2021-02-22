import React, { useEffect } from 'react';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store';
import { signInRequest, setLoginEmail, setLoginPassword } from '../../store/modules/auth/slice';

const SignInPage: React.FC = () => {
  const { loadingSignInRequest, isSignedIn, token } = useSelector(
    (state: StoreState) => state.auth,
  );
  const dispatch = useDispatch();

  return (
    <div id="sign-in-page">
      <form>
        <img src="http://www.hsevolutione.com/wp-content/uploads/2020/07/logo-principal.png" alt="Logo Marca" />
        <label htmlFor="login">
          Usuário
          <input id="login" name="login" type="text" onChange={(e) => dispatch(setLoginEmail(e.target.value))} />
        </label>
        <label htmlFor="password">
          Senha
          <input id="password" name="password" type="password" onChange={(e) => dispatch(setLoginPassword(e.target.value))} />
        </label>
        <button
          type="button"
          onClick={() => {
            dispatch(signInRequest({ email: 'email@email.com', password: '123456' }));
          }}
        >{loadingSignInRequest ? 'Carregando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
