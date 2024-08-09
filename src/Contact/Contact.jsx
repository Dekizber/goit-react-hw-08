import { FaUserAstronaut } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ id, name, number, handleDeleteContact }) => {
  return (
    <div>
      <p>
        <FaUserAstronaut />
        {name}
      </p>
      <p>
        <FaPhoneAlt />
        {number}
      </p>
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
