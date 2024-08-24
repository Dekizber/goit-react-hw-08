import { FaUserAstronaut } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import clsx from "clsx";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContactsThunk } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
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
      <button type="button" onClick={() => dispatch(deleteContactsThunk(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
