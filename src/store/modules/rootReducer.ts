import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth/slice';
import errors from './errors/slice';
import template from './template/slice';
import cards from './cards/slice';

const rootReducer = combineReducers({
  auth,
  errors,
  template,
  cards,
});
export default rootReducer;
