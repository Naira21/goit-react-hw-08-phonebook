// import { createReducer } from '@reduxjs/toolkit';

// import { register, login, logOut } from "./auth-thunks";
// const initState = {
//     user: { name: null, email: null },
//     token: null,
//     isLoggedIn: false,        
// }
// const authReducer = createReducer(initState, {
//     [register.fulfilled]: (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//     },
//      [login.fulfilled]: (state, action) => {
//          state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//     },
//     [logOut.fulfilled]: (_, { payload }) => payload,
// })
// export default authReducer;