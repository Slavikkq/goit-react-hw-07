import { createSlice } from "@reduxjs/toolkit";
import * as api from "../contactsApi";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
    searchResults: [],
  },
  reducers: {
    addContactSuccess(state, action) {
      state.items.push(action.payload);
    },
    deleteContactSuccess(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    fetchContactsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchContactsSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchContactsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    searchContacts(state, action) {
      const searchTerm = action.payload.toLowerCase();
      state.searchResults = state.items.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const {
  addContactSuccess,
  deleteContactSuccess,
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsFailure,
  searchContacts,
} = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items;
export const selectSearchResults = (state) => state.contacts.searchResults;

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsStart());
  try {
    const contacts = await api.fetchContacts();
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchContactsFailure(error));
  }
};

export const addContact = (contactData) => async (dispatch) => {
  try {
    const newContact = await api.addContact(contactData);
    dispatch(addContactSuccess(newContact));
  } catch (error) {
    console.error("Error adding contact:", error);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await api.deleteContact(id);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    console.error("Error deleting contact:", error);
  }
};

export default contactsSlice.reducer;
