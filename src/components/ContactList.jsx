// ContactList.jsx
import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../redux/contactsSlice";
import Contact from "./Contact";

export default function ContactList({ handleDelete }) {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
