import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// @ts-ignore
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { Error, ErrorsState } from './types';

const initialState: ErrorsState = {
};

const errorsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    printError(state, action: PayloadAction<Error[]>) {
      Swal.fire({
        title: action.payload[0].title,
        text: action.payload.reduce((prev, cur) => `${prev}${prev ? ', ' : ''}${cur.message}`, ''),
        icon: 'error',
      });
    },
  },
});

export const {
  printError,
} = errorsSlice.actions;

export default errorsSlice.reducer;
