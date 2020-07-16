// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeReducer';
import contactsSlice from './contacts/contactsSlice';

export const store = configureStore({
  reducer: { contacts: contactsSlice.reducer, theme: themeReducer },
});
