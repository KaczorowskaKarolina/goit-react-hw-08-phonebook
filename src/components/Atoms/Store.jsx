import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await fetch('https://655bc2e8ab37729791a98fce.mockapi.io/contacts');
  return response.json();
});

export const addContact = createAsyncThunk('contacts/addContact', async (contactData, { getState }) => {
  const state = getState();
  const existingContact = state.contacts.data.find(
    (contact) => contact.name.toLowerCase() === contactData.name.toLowerCase()
  );

  if (existingContact) {
    // Przerwij dodawanie kontaktu, jeśli już istnieje
    throw new Error('This contact is already on your list');
  }

  const response = await fetch('https://655bc2e8ab37729791a98fce.mockapi.io/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  });

  return response.json();
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  const response = await fetch(`https://655bc2e8ab37729791a98fce.mockapi.io/contacts/${contactId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete contact');
  }

  return contactId;
});


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = filterSlice.actions;

const rootReducer = {
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;