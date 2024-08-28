import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div className={s.userMenu}>
      <p>Welcome, {name}</p>
      <button
        className={s.signUpBtn}
        type="button"
        onClick={() => {
          dispatch(logoutThunk());
        }}
      >
        Logout
      </button>
    </div>
  );
};
