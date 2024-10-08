import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState, useEffect } from "react";
import css from "./App.module.css";

const listPerson = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const getInitialValue = () => {
  const checkStorage = localStorage.getItem("contactList");
  return checkStorage ? JSON.parse(checkStorage) : listPerson;
};

export default function App() {
  const [persons, setPerson] = useState(getInitialValue);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const phoneBook = JSON.stringify(persons);
    localStorage.setItem("contactList", phoneBook);
  }, [persons]);

  const visiblePerson = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addNewPerson = (newPerson) => {
    setPerson((setPerson) => [...setPerson, newPerson]);
  };

  const deletePerson = (personId) => {
    setPerson((prevPerson) => {
      return prevPerson.filter((person) => person.id !== personId);
    });
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm updateContactList={addNewPerson} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList persons={visiblePerson} onDelete={deletePerson} />
    </div>
  );
}
