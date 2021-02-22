import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { Card, CardsState } from './types';
import {
  mockAllCards, mockPlayers, mockTableA, mockTableB, mockTableC, mockTableD,
} from './mocks';

const initialState: CardsState = {
  table: mockTableA,
  tableB: mockTableB,
  tableC: mockTableC,
  tableD: mockTableD,
  players: mockPlayers,
  cards: mockAllCards,
};

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    pushCard(state, action: PayloadAction<Card>) {
      state.cards.push(action.payload);
    },
    flipFlopOfTable(state, action: PayloadAction<string>) {
      if (state.table.id === action.payload) state.table.flop = state.table.flop.map((x) => ({ ...x, backUp: false }));
      if (state.tableB.id === action.payload) state.tableB.flop = state.tableB.flop.map((x) => ({ ...x, backUp: false }));
      if (state.tableC.id === action.payload) state.tableC.flop = state.tableC.flop.map((x) => ({ ...x, backUp: false }));
      if (state.tableD.id === action.payload) state.tableD.flop = state.tableD.flop.map((x) => ({ ...x, backUp: false }));
    },
    flipTurnOfTable(state, action: PayloadAction<string>) {
      console.log('vindo flipar turn', action, state.table);
      if (state.table.id === action.payload && state.table.turn) state.table.turn.backUp = false;
      if (state.tableB.id === action.payload && state.tableB.turn) state.tableB.turn.backUp = false;
      if (state.tableC.id === action.payload && state.tableC.turn) state.tableC.turn.backUp = false;
      if (state.tableD.id === action.payload && state.tableD.turn) state.tableD.turn.backUp = false;
    },
    flipRiverOfTable(state, action: PayloadAction<string>) {
      if (state.table.id === action.payload && state.table.river) state.table.river.backUp = false;
      if (state.tableB.id === action.payload && state.tableB.river) state.tableB.river.backUp = false;
      if (state.tableC.id === action.payload && state.tableC.river) state.tableC.river.backUp = false;
      if (state.tableD.id === action.payload && state.tableD.river) state.tableD.river.backUp = false;
    },
  },
});

export const {
  pushCard,
  flipFlopOfTable,
  flipTurnOfTable,
  flipRiverOfTable,
} = templateSlice.actions;

export default templateSlice.reducer;
