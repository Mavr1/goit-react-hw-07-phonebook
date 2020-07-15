// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';
import themeReducer from './theme/themeReducer';

export const store = configureStore({
  reducer: { contacts: contactsReducer, theme: themeReducer },
});
