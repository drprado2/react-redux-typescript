import { FaBeer } from 'react-icons/fa';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { TemplateState } from './types';

const initialState: TemplateState = {
  icon: <FaBeer />,
  title: '',
  routeId: '',
  drawerOpen: true,
};

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<Omit<TemplateState, 'drawerOpen'>>) {
      state.icon = action.payload.icon;
      state.title = action.payload.title;
      state.routeId = action.payload.routeId;
    },
    toggleDrawer(state, action: PayloadAction) {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

export const {
  setCurrentPage,
  toggleDrawer,
} = templateSlice.actions;

export default templateSlice.reducer;
