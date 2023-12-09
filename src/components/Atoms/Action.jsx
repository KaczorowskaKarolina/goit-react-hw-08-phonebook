import { createAsyncThunk } from '@reduxjs/toolkit';
import * as app from '../Templates/App';

export const fetchContactsAsync = createAsyncThunk(
  'contacts/fetchContactsAsync',
  async () => {
    const contacts = await app.fetchContacts();
    return contacts;
  }
);

export const addContactAsync = createAsyncThunk(
  'contacts/addContactAsync',
  async contact => {
    const newContact = await app.addContact(contact);
    return newContact;
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContactAsync',
  async contactId => {
    await app.deleteContact(contactId);
    return contactId;
  }
);