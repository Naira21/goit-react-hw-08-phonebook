import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './action';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactThunk,
} from './operations';

export const items = createReducer([], {
  [fetchContactThunk.fulfilled]: (_, { payload }) => payload,
  [addContactThunk.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContactThunk.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export const loading = createReducer(false, {
  [fetchContactThunk.pending]: () => true,
  [fetchContactThunk.fulfilled]: () => false,
  [fetchContactThunk.rejected]: () => false,

  [addContactThunk.pending]: () => true,
  [addContactThunk.fulfilled]: () => false,
  [addContactThunk.rejected]: () => false,

  [deleteContactThunk.pending]: () => true,
  [deleteContactThunk.fulfilled]: () => false,
  [deleteContactThunk.rejected]: () => false,
});
