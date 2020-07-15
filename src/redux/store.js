import { createStore, combineReducers } from 'redux';
import contactReducer from './contacts/contactsReducer';
import themeReducer from './theme/themeReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  theme: themeReducer,
});

export const store = createStore(rootReducer);
