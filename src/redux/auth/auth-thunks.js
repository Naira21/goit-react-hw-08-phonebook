import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const tokenThunk = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}
            
export const registerThunk = createAsyncThunk(
    'user/register',
    async user => {
        const { data } = await axios.post('/users/signup', user);
        tokenThunk.set(data.token);
        return data;
    }
)

export const loginThunk = createAsyncThunk(
    'users/login',
    async credentials =>{
        const { data } = await axios.post('/users/login', credentials);
        tokenThunk.set(data.token);
        console.log('data', data);
        return data;
    }
)

export const logoutThunk = createAsyncThunk(
    'users/logout',
    async (_, {rejectWithValue}) => { 
        try {
        //   const { data } = await axios.post('/users/logout');
            await axios.post('/users/logout');
            tokenThunk.unset();
        //return data;  
        } catch (error) {
         return rejectWithValue(error.message)   
        }         
    }
)

export const currentThunk = createAsyncThunk('users/current',
    async (_, {getState, rejectWithValue}) => {
        const state = getState();
        const token = state.auth.token;
        console.log('redux store', token);
        if (!token) return rejectWithValue();
        tokenThunk.set(token);

        try {
            const data = await axios.get('/users/current');
            return data;
        } catch (error) {
            rejectWithValue(error.message)
        }
        
    }
)
