import { useSelector } from "react-redux";
import { filteredContacts } from "../../redux/selectors";
import clsx from "clsx";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const filteredData = useSelector(filteredContacts);

  return (
    <ul className={clsx(s.listContact)}>
      {filteredData.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
