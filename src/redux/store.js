import { contactsReducer } from './contactsSlice';
import { filterSlice } from './filtersSlice';
import { configureStore } from '@reduxjs/toolkit';



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice,
  },
});
