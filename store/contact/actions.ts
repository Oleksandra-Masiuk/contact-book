import {createAction} from '@reduxjs/toolkit';
import {
  deleteContactById,
  getContacts,
  addContact as addServiseContact,
} from '../../services/ContactServise';
import {ContactsForm} from '../../interfaces/ContactsForm';
import {mapContactsArray} from '../../helpers/mapContactsArray';
import {LibraryContact} from '../../interfaces/LibraryContact';
import {AppDispatch} from '../store';

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

const addContact = createAction(ActionType.ADD_CONTACT, contact => ({
  payload: {
    contact,
  },
}));

const loadContacts = () => async (dispatch: AppDispatch) => {
  const contacts = await getContacts();
  dispatch(setContacts(contacts));
};

const deleteContact = (id: string) => async (dispatch: AppDispatch) => {
  await deleteContactById(id);
  dispatch(removeContact(id));
};

const createContact = (data: ContactsForm) => async (dispatch: AppDispatch) => {
  const contact: LibraryContact = await addServiseContact(data);
  dispatch(addContact(mapContactsArray([contact])[0]));
};

export {
  loadContacts,
  deleteContact,
  createContact,
  setContacts,
  addContact,
  removeContact,
};
