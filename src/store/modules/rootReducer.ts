import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth/slice';
import errors from './errors/slice';

const rootReducer = combineReducers({
  auth,
  errors,
});
export default rootReducer;
