import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const userLogin = '/user/login';
const userSignup = '/user/signup';
const userLogout = '/user/logout';
const userCurrent = '/user/current';
const baseURL = 'https://connections-api.herokuapp.com';




// const token = {
    //     set(token) {
        //         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        //     },
        //     unset() {
            //         axios.defaults.headers.common.Authorization = '';
            //     }
            // }
            
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const registerThunk = createAsyncThunk(
    'user/register',
    async user => {
        const { data } = await axios.post('/user/signup', user);
        // token.set(data.token);
        return data;
        // const response = await fetch(baseURL + userSignup, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(user)
        // });
        // console.log(response);
        // return response.data;
    }
)

// export const login = createAsyncThunk(
//     'user/login',
//     async credentials =>{
//         const { data } = await axios.post('/user/login', credentials);
//         // token.set(data.token);
//         return data;
//     }
// )

// export const logOut = createAsyncThunk(
//     'user/logout',
//     async () => {
//         const { data } = await axios.post('/user/logout');
//         // token.unset();
//         return data;
//     }
// )

// export const fetchCurrentUser = createAsyncThunk('user/current',
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState();
//         const persistedToken = state.auth.token;
//         const token = state.auth.token;
//         if (!token) {
//             return thunkAPI.rejectWithValue(); //or return state;
//         }
//         token.set(persistedToken);
//         const data = await axios.get('/users/current');
//         return data;
//     }
// )
