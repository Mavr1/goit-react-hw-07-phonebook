import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  filter: '',
  error: null,
};

export default createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getAllContactsSuccess: (state, action) => ({
      ...state,
      list: action.payload.contacts,
    }),

    getAllContactsFailure: (state, action) => ({
      ...state,
      error: action.payload.error,
    }),

    addContactSuccess: (state, action) => ({
      ...state,
      list: [...state.list, action.payload.contact],
    }),

    addContactFailure: (state, action) => ({
      ...state,
      error: action.payload.error,
    }),

    deleteContactSuccess: (state, action) => ({
      ...state,
      list: state.list.filter((item) => item.id !== action.payload.id),
    }),

    deleteContactFailure: (state, action) => ({
      ...state,
      error: action.payload.error,
    }),

    filterContacts: (state, action) => ({
      ...state,
      filter: action.payload.filter,
    }),
  },
});