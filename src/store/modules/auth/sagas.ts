import * as actions from './slice';
import {takeLatest, call, put, all, takeEvery} from 'redux-saga/effects';
import api from "../../../services/api";
import {PayloadAction} from "@reduxjs/toolkit";
import {LoginForm} from "./types";

// call quando formos chamar funções assíncronas ou outros generators
// put para fazer dispatch de action
// takeLatest => Caso você já tenha uma task desse tipo rodando ele cancela ela se uma nova for chamada, deixando apenas 1 rodar por vez e priorizando a última
// takeEvery => permite rodar paralelamente várias chamadas

export function* signIn({payload}: PayloadAction<LoginForm>) {
    try {
        const {email, password} = payload;
        const {data} = yield call(api.post, '', {email, password})
        yield put(actions.signInSuccess({token: data.token}));
    } catch (err) {
        yield put(actions.signInFailure());
    }
}

export default all([
    takeLatest(actions.signInRequest.type, signIn)
]);
