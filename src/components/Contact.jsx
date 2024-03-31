import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";

export default function Contact({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}
