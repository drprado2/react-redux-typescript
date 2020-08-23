import React, {useEffect} from "react";
import './styles.scss';
import {useSelector, useDispatch} from 'react-redux';
import {StoreState} from "../../store";
import {signInRequest} from "../../store/modules/auth/slice";

const SignIn: React.FC = () => {
    const {loadingSignInRequest, isSignedIn, token} = useSelector((state: StoreState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if(isSignedIn)
            alert('Login feito com sucesso token: ' + token);
    },  [isSignedIn, token])

    return (
        <div id="sign-in-page">
            <form>
                <img src="http://www.hsevolutione.com/img/logo-principal.png" alt="Logo Marca"/>
                <label htmlFor="login">Usuário</label>
                <input id="login" name="login" type="text"/>
                <label htmlFor="password">Senha</label>
                <input id="password" name="password" type="password"/>
                <button type="button" onClick={() => dispatch(signInRequest({email: "email@email.com", password: "123456"}))}>{loadingSignInRequest ? 'Carregando...' : 'Entrar'}</button>
            </form>
        </div>
    )
}

export default SignIn;
