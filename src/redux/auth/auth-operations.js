import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { set } from '@reduxjs/toolkit/node_modules/immer/dist/internal';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const register = createAsyncThunk(
    'auth/register',
    async credentials =>{
        const { data } = await axios.post('/user/signup', credentials);
        token.set(data.token);
        return data;
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async credentials =>{
        const { data } = await axios.post('/user/login', credentials);
        token.set(data.token);
        return data;
    }
)

export const logOut = createAsyncThunk(
    'auth/logOut',
    async () => {
        const { data } = await axios.post('/user/logout');
        token.unset();
        return data;
    }
)

export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrent',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        const token = state.auth.token;
        if (!token) {
            return thunkAPI.rejectWithValue(); //or return state;
        }
        token.set(persistedToken);
        const data = await axios.get('/users/current');
        return data;
    }
)
