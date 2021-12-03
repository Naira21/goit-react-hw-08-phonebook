import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://619bf11168ebaa001753c6e3.mockapi.io/api/v1';

export const fetchContactThunk = createAsyncThunk(
  'contact/fetchThunk',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  },
);

export const addContactThunk = createAsyncThunk(
  'contact/addThunk',
  async newContact => {
    const { data } = await axios.post('/contacts', newContact);

    return data;
  },
);

export const deleteContactThunk = createAsyncThunk(
  'contact/deleteThunk',
  async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data.id;
  },
);
