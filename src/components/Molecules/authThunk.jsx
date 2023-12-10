import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginAsync = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
 const response = await fetch('https://655bc2e8ab37729791a98fce.mockapi.io/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
 });

 if (!response.ok) {
    return thunkAPI.rejectWithValue(await response.json());
 }

 const user = await response.json();
 return user;
});

export const registerAsync = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
 const response = await fetch('https://655bc2e8ab37729791a98fce.mockapi.io/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
 });

 if (!response.ok) {
    return thunkAPI.rejectWithValue(await response.json());
 }

 const user = await response.json();
 return user;
});