import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectNameFilter = state => state.filter.name;
export const selectIsLoading = state => state.contacts.loading;
export const selectIsError = state => state.contacts.error;

export const filteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);