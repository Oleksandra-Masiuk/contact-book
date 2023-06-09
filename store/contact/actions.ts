import {createAction} from '@reduxjs/toolkit';
import {deleteContactById, getContacts} from '../../services/ContactServise';

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

const removeContact = createAction(ActionType.DELETE_CONTACT, id => ({
  payload: {
    id,
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

const deleteContact = (id: string) => async dispatch => {
  await deleteContactById(id);
  dispatch(removeContact(id));
};

export {loadContacts, setContacts, addContact, deleteContact, removeContact};
