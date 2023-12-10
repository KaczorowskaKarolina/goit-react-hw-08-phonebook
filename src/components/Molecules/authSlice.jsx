import { createSlice } from '@reduxjs/toolkit';
import { loginAsync, registerAsync } from './authThunk';

const initialState = {
 user: null,
 status: 'idle',
 error: null,
};

const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
   loginFailed: (state, action) => {
     state.status = 'failed';
     state.error = action.payload;
   },
   loginSuccess: (state, action) => {
     state.status = 'succeeded';
     state.user = action.payload;
   },
   registerFailed: (state, action) => {
     state.status = 'failed';
     state.error = action.payload;
   },
   registerSuccess: (state, action) => {
     state.status = 'succeeded';
     state.user = action.payload;
   },
 },
 extraReducers: (builder) => {
   builder
     .addCase(loginAsync.pending, (state) => {
       state.status = 'loading';
     })
     .addCase(loginAsync.fulfilled, (state, action) => {
       state.status = 'succeeded';
       state.user = action.payload;
     })
     .addCase(loginAsync.rejected, (state, action) => {
       state.status = 'failed';
       state.error = action.payload;
     })
     .addCase(registerAsync.pending, (state) => {
       state.status = 'loading';
     })
     .addCase(registerAsync.fulfilled, (state, action) => {
       state.status = 'succeeded';
       state.user = action.payload;
     })
     .addCase(registerAsync.rejected, (state, action) => {
       state.status = 'failed';
       state.error = action.payload;
     });
 },
});

export const {
 loginFailed,
 loginSuccess,
 registerFailed,
 registerSuccess,
} = authSlice.actions;

export default authSlice.reducer;