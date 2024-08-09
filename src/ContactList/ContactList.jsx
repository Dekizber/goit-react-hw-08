import Contact from "../Contact/Contact";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul>
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
