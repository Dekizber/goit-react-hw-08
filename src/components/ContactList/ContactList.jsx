import Contact from "../Contact/Contact";
import clsx from "clsx";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectFilter } from "../../redux/selectors";
const ContactList = ({ handleDeleteContact }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const filteredData = contacts.filter;

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
