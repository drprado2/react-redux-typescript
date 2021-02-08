import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { Card, CardsState } from './types';
import d2 from '../../../assets/images/2D.png';
import c2 from '../../../assets/images/2C.png';

const initialState: CardsState = {
  cards: [
    {
      height: 200, width: (height) => height * 0.7, id: 'd2', name: '2 de Diamante', image: d2,
    },
    {
      height: 200, width: (height) => height * 0.7, id: 'c2', name: '2 de Diamante', image: c2,
    },
  ],
};

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    pushCard(state, action: PayloadAction<Card>) {
      state.cards.push(action.payload);
    },
  },
});

export const {
  pushCard,
} = templateSlice.actions;

export default templateSlice.reducer;
