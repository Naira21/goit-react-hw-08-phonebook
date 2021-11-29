import { createSlice } from "@reduxjs/toolkit";
import { register, login } from "./auth-operations";


const initState = {
    user: { name: null, email: null },
    token: null,
    isLoggenIn: false,        
}

const authSlice = createSlice({
    name: 'auth',
    initState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggenIn = true;
        }
    },
})
export default authSlice.reducer;