import Contact from "../Contact/Contact";
import clsx from "clsx";
import s from "./ContactList.module.css";
const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={clsx(s.listContact)}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              handleDeleteContact={handleDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
