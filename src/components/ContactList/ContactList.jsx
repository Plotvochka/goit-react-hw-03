import Contact from "../Contact/Contact";

export default function ContactList({ persons, onDelete }) {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          <Contact person={person} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
