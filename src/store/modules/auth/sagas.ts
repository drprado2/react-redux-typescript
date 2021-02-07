import {
  takeLatest, call, put, all, takeEvery, select,
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import * as actions from './slice';
import * as errorsActions from '../errors/slice';
import api from '../../../services/api';

// call quando formos chamar funções assíncronas ou outros generators
// put para fazer dispatch de action
// takeLatest => Caso você já tenha uma task desse tipo rodando ele cancela ela se uma nova for chamada, deixando apenas 1 rodar por vez e priorizando a última
// takeEvery => permite rodar paralelamente várias chamadas

export function* signIn() {
  let response : AxiosResponse;
  try {
    const { email, password } = yield select((state) => state.auth.loginForm);
    console.log('saca so', email, password);
    response = yield call(api.post, '/api/v1/signin', { email, password });
    window.location.href = '/';
    yield put(actions.signInSuccess({ token: response.data.token, roles: ['VIEWER', 'SELLER'] }));
  } catch (err) {
    console.error('Fail singin 123', err);
    yield put(actions.signInFailure());
    yield put(errorsActions.printError(err.response.data.errors));
  }
}

export default all([takeLatest(actions.signInRequest.type, signIn)]);
