import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const register = createAsyncThunk(
    'auth/register',
    async credentials =>{
        const data = await axios.post('/user/signup', credentials);
        return data;
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async credentials =>{
        const data = await axios.post('/user/login', credentials);
        return data;
    }
)