import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
import createSagaMiddleware from 'redux-saga';
import {Middleware} from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createTransform } from 'redux-persist';

const removeLoadingProperties = createTransform(
    (inboundState: any, key) => {
        let newState: any = {};
        for(const objKey in inboundState){
            if(!objKey.toUpperCase().includes('LOADING'))
                newState[objKey] = inboundState[objKey];
        }
      return { ...newState };
    },
    (outboundState, key) => {
      return { ...outboundState };
    },
);

const persistConfig = {
  key: 'root',
  storage,
    transforms: [removeLoadingProperties]
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [
  sagaMiddleware
];
const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares
});
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof rootReducer>;
export {
  store,
  persistor
};

