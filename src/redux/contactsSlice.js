import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContactsThunk, deleteContactsThunk, fetchContactsThunk } from './contactsOps';

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
          state.isError = false;
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(addContactsThunk.fulfilled, fetchContactsThunk.fulfilled, deleteContactsThunk.fulfilled),
        state => {
          state.isLoading = false;
        }
      );
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
