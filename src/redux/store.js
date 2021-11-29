import { configureStore } from '@reduxjs/toolkit';
import { items, filter, loading } from './contacts/reducers';
import { combineReducers } from 'redux';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

//import {auth} from './auth/reducers'
//export const authReducer=combinereducers({auth})
//const authPersistConfig={
// key: 'auth',
// storage,
// whitelist:['token']
// }


export const contactReducer = combineReducers({
  items,
  filter,
  loading,
});

export const store = configureStore({
  reducer: contactReducer,
  //auth: persistReducer(authPersistConfig, auth),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
