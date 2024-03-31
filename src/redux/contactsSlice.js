import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    searchResults: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    searchContacts(state, action) {
      const searchTerm = action.payload.toLowerCase();
      state.searchResults = state.items.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { addContact, deleteContact, searchContacts } =
  contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items;
export const selectSearchResults = (state) => state.contacts.searchResults;

export default contactsSlice.reducer;
