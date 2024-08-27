import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContactsThunk, deleteContactsThunk, fetchContactsThunk } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchContactsThunk.fulfilled, (state, action) => { state.items = action.payload; })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => { state.items = state.items.filter(item => item.id !== action.payload); })

      .addMatcher(
        isAnyOf(addContactsThunk.rejected, fetchContactsThunk.rejected, deleteContactsThunk.rejected),
        (state, action) => {
          state.error = action.payload;
          state.loading = false;
        }
      )

      .addMatcher(
        isAnyOf(addContactsThunk.pending, fetchContactsThunk.pending, deleteContactsThunk.pending),
        state => {
          state.error = false;
          state.loading = true;
        }
      )

      .addMatcher(
        isAnyOf(addContactsThunk.fulfilled, fetchContactsThunk.fulfilled, deleteContactsThunk.fulfilled),
        state => {
          state.loading = false;
        }
      );
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
