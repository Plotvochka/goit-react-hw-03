import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ persons, onDelete }) {
  return (
    <ul className={css.list}>
      {persons.map((person) => (
        <li key={person.id} className={css.item}>
          <Contact person={person} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
