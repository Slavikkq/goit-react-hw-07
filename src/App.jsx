import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./redux/contactsSlice";
import { changeFilter, selectNameFilter } from "./redux/filtersSlice";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (values) => {
    dispatch(addContact(values));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleSearch = (searchTerm) => {
    dispatch(changeFilter(searchTerm));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleAddContact} />
      <SearchBox handleSearch={handleSearch} />
      <ContactList contacts={contacts} handleDelete={handleDeleteContact} />
    </div>
  );
}
