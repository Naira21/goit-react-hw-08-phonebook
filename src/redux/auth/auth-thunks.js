import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const tokenThunk = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerThunk = createAsyncThunk('user/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      tokenThunk.set(data.token);
      return data;      
    } catch (error) {
      alert("Hmmm...it doesn't work. Wave your wand again");
      return rejectWithValue(error.message)
    }
});

export const loginThunk = createAsyncThunk('users/login',
  async (credentials, {rejectWithValue}) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
    tokenThunk.set(data.token);
    return data;
    } catch (error) {
      rejectWithValue(error.message);
      alert('Incorrect email or password');
      return;
    }
    
});

export const logoutThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      tokenThunk.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const currentThunk = createAsyncThunk(
  'users/current',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;
    if (token==="") return;
    
    try {
      const { data } = await axios.get('/users/current');
      tokenThunk.set(token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);