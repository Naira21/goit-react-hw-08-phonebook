import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { items, filter, loading } from './contacts/reducers';
import authReducer from './auth/auth-slice';


const authPersistConfig = {
  key: 'authToken',
  storage,
  whitelist:['token'],
}

export const contactReducer = combineReducers({
  items,
  filter,
  loading,
});

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
