import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, loginThunk, logoutThunk, currentThunk } from "./auth-thunks";

const initState = {
    user: { name: '', email: '' },
    token: '',
    isLoading: false,
    isAuth: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    extraReducers: {
        [registerThunk.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoading = false;
            state.isAuth = true;
        },
        [registerThunk.pending](state, action) {
            state.isLoading = true;
        },
        [registerThunk.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;  
        },
        [loginThunk.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoading = false;
            state.isAuth = true;
        },
        [loginThunk.pending](state, action) {
            state.isLoading = true;
        },
        [loginThunk.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;  
        },
        [currentThunk.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoading = false;
            state.isAuth = true;
        },
        [currentThunk.pending](state, action) {
            state.isLoading = true;
        },
        [currentThunk.rejected](state, action) {
            state.isLoading = false;
            state.isAuth = false;
            state.token = '';
            state.error = action.payload;            
        },
        [logoutThunk.fulfilled](state, action) {
            state.user = initState.user;
            state.token = '';
            state.isLoading = false;
            state.isAuth = false;
        },
        [logoutThunk.pending](state, action) {
            state.isLoading = true;
        },
        [logoutThunk.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;            
        },
    },    
})
export default authSlice.reducer;