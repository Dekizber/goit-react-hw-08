import { useSelector } from "react-redux";
import s from "./HomePage.module.css";
import { selectUser } from "../../redux/auth/selectors";
const HomePage = () => {
  const user = useSelector(selectUser);
  return (
    <div className={s.wrapper}>
      <div className={s.titleBox}>
        <h2 className={s.title}>
          {user.email
            ? `Hello ${user.name}`
            : "Please authorize to see your contacts"}
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
