import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contactsSlice";
import Contact from "./Contact";

export default function ContactList({ handleDelete }) {
  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
