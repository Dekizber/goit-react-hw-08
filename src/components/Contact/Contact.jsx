import { FaUserAstronaut } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import clsx from "clsx";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, handleDeleteContact }) => {
  return (
    <div className={clsx(s.contCard)}>
      <div className={clsx(s.contData)}>
        <p>
          <FaUserAstronaut />
          {name}
        </p>
        <p>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button
        onClick={() => {
          handleDeleteContact(id);
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
