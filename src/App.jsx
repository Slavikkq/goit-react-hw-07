import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactsSlice";
import { changeFilter, selectNameFilter } from "./redux/filtersSlice";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const searchTerm = useSelector(selectNameFilter);

  const handleAddContact = (values) => {
    const newContact = { ...values, id: Math.random().toString() };
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleAddContact} />
      <SearchBox handleSearch={handleSearch} />
      <ContactList
        contacts={filteredContacts}
        handleDelete={handleDeleteContact}
      />
    </div>
  );
}
