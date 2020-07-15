import actionTypes from '../actionTypes';

const getAllContactsSuccess = (contacts) => ({
  type: actionTypes.GET_ALL_CONTACTS_SUCCESS,
  payload: {
    contacts,
  },
});

const getAllContactsFailure = (error) => ({
  type: actionTypes.GET_ALL_CONTACTS_FAILURE,
  payload: {
    error,
  },
});

const addContactSuccess = (contact) => ({
  type: actionTypes.ADD_CONTACT_SUCCESS,
  payload: {
    contact,
  },
});

const addContactFailure = (error) => ({
  type: actionTypes.ADD_CONTACT_FAILURE,
  payload: {
    error,
  },
});

const deleteContactSuccess = (id) => ({
  type: actionTypes.DELETE_CONTACT_SUCCESS,
  payload: {
    id,
  },
});

const deleteContactFailure = (error) => ({
  type: actionTypes.DELETE_CONTACT_FAILURE,
  payload: {
    error,
  },
});

const setFilter = (event) => ({
  type: actionTypes.FILTER_CONTACTS,
  payload: {
    filter: event.target.value,
  },
});

export default {
  getAllContactsSuccess,
  getAllContactsFailure,
  addContactSuccess,
  addContactFailure,
  deleteContactSuccess,
  deleteContactFailure,
  setFilter,
};
