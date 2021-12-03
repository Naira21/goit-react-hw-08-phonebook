import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, login, logOut, fetchCurrentUser } from "./auth-thunks";

const initState = {
    user: { name: '', email: '' },
    token: '',
    isLoggedIn: false,
    isAuth: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    extraReducers: {
        [registerThunk.fulfilled](state, action) {
            state.user = action.payload.user,
            state.token = action.payload.token,
            state.isLoggedIn = false,
        },
        [registerThunk.pending](state, action) {
            isLoggedIn = true;
        },
    },
    
})
// export const { renameProp} = authSlice.actions;
export default authSlice.reducer;



        // [login.fulfilled](state, action) {
        //     state.user = action.payload.user;
        //     state.token = action.payload.token;
        //     state.isLoggedIn = true;
        // },
        // [logOut.fulfilled](state, action) {
        //     state.user = { name: null, email: null };
        //     state.token = null;
        //     state.isLoggedIn = false;
        // },
        // [fetchCurrentUser.pending](state) {
        //     state.isRefreshing = true;
        // },
        // [fetchCurrentUser.fulfilled](state, action) {
        //     state.user = action.payload;
        //     state.isLoggedIn = true;
        //     state.isRefreshing = false;
        // },
        // [fetchCurrentUser.rejected](state) {
        //     state.isRefreshing = false;
        // }
