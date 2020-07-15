import api from '../../services/api';
import contactsActions from './contactsActions';
import themeActions from '../theme/themeActions';

export const addContact = (contact) => async (dispatch, getState) => {
  try {
    const match = getState().contacts.list.some(
      (item) => item.name === contact.name
    );
    if (!match) {
      const addedContact = await api.addContact(contact);
      dispatch(contactsActions.addContactSuccess(addedContact.data));
    } else alert(`User with name ${contact.name} already exists`);
  } catch (e) {
    dispatch(contactsActions.addContactFailure(e));
    console.log(e);
  }
};

export const deleteContact = (id) => async (dispatch, getState) => {
  try {
    await api.deleteContact(id);
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (e) {
    dispatch(contactsActions.deleteContactFailure(e));
    console.log(e);
  }
};

export const getAllContacts = () => async (dispatch, getState) => {
  try {
    dispatch(themeActions.setLoadingTrue);
    const contacts = await api.getAllContacts();
    dispatch(contactsActions.getAllContactsSuccess(contacts.data));
  } catch (e) {
    dispatch(contactsActions.getAllContactsFailure(e));
    console.log(e);
  } finally {
    dispatch(themeActions.setLoadingFalse);
  }
};
