import { configureStore } from '@reduxjs/toolkit';
import  authSlice  from '../Molecules/authSlice';
import contactsSlice from '../Molecules/contactsSlice';

export const store = configureStore({
 reducer: {
    auth: authSlice,
    contacts: contactsSlice,
 },
});