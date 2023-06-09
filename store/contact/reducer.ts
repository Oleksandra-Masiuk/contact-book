import {createReducer} from '@reduxjs/toolkit';
import {setContacts, addContact, deleteContact} from './actions';
import {Contact} from '../../interfaces/Contact';

export interface InitialState {
  contacts: Contact[];
}

const initialState: InitialState = {
  contacts: [],
};

const reducer = createReducer(initialState, builder => {
  builder.addCase(setContacts, (state, action) => {
    const {contacts} = action.payload;

    state.contacts = contacts;
  });
  builder.addCase(addContact, (state, action) => {
    const {contact} = action.payload;

    state.contacts = [contact, ...state.contacts];
  });
  builder.addCase(deleteContact, (state, action) => {
    const {id} = action.payload;

    state.contacts = state.contacts.filter(contact => contact.id !== id);
  });
});

export {reducer};
