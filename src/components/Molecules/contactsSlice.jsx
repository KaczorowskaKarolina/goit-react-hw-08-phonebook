import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsAsync } from './contactsThunk';

const initialState = {
 contacts: [],
 status: 'idle',
 error: null,
};

const contactsSlice = createSlice({
 name: 'contacts',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
    builder
      .addCase(fetchContactsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContactsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = action.payload;
      })
      .addCase(fetchContactsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
 },
});

export default contactsSlice.reducer;