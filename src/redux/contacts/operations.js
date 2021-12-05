import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContactThunk = createAsyncThunk(
  'contact/fetchThunk',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  },
);

export const addContactThunk = createAsyncThunk(
  'contact/addThunk',
  async (newContact) => {
    const { data } = await axios.post('/contacts', newContact);
    return data;
  },
);

export const deleteContactThunk = createAsyncThunk(
  'contact/deleteThunk',
  async id => {
    await axios.delete(`/contacts/${id}`);
    return id;
  },
);
