import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ person, onDelete }) {
  return (
    <>
      <IoPerson />
      <p>{person.name}</p>
      <FaPhoneAlt />
      <p>{person.number}</p>
      <button onClick={() => onDelete(person.id)}>Delete</button>
    </>
  );
}
