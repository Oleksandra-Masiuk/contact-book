import {createAction} from '@reduxjs/toolkit';
import {getContacts} from '../../services/ContactServise';

enum ActionType {
  LOAD_CONTACTS = 'contact/load-contact',
  ADD_CONTACT = 'contact/add-contact',
  DELETE_CONTACT = 'contact/delete-contact',
}
const setContacts = createAction(ActionType.LOAD_CONTACTS, contacts => ({
  payload: {
    contacts,
  },
}));

const loadContacts = () => async dispatch => {
  const contacts = await getContacts();
  dispatch(setContacts(contacts));
};

const addContact = createAction(ActionType.ADD_CONTACT, contact => ({
  payload: {
    contact,
  },
}));

const deleteContact = createAction(ActionType.DELETE_CONTACT, id => ({
  payload: {
    id,
  },
}));

export {loadContacts, setContacts, addContact, deleteContact};
