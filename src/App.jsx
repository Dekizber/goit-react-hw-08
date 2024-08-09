import { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { nanoid } from "nanoid";

const App = () => {
  const initialArr = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contactsArr, setContactsArr] = useState(
    () => JSON.parse(window.localStorage.getItem("keyArr")) ?? initialArr
  );

  useEffect(
    () => window.localStorage.setItem("keyArr", JSON.stringify(contactsArr)),
    [contactsArr]
  );

  const [searchInput, setSearchInput] = useState("");
  const contactFilter = contactsArr.filter((item) =>
    item.name.toLowerCase().trim().includes(searchInput.toLowerCase().trim())
  );
  const newId = nanoid();
  const handleAddContact = (newContact) => {
    setContactsArr((prev) => [...prev, { ...newContact, id: newId }]);
  };
  const handleDeleteContact = (id) =>
    setContactsArr((prev) => prev.filter((item) => item.id !== id));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        contactsArr={contactsArr}
        handleAddContact={handleAddContact}
      />
      <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />
      <ContactList
        contacts={contactFilter}
        setContactsArr={setContactsArr}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
