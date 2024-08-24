import clsx from "clsx";
import s from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContactsThunk } from "./redux/contactsOps";
import { selectIsError, selectIsLoading } from "./redux/selectors";
import { PacmanLoader } from "react-spinners";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  console.log(isError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  console.log("isLoading:", isLoading);

  return (
    <div>
      <h1 className={clsx(s.title)}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && (
        <div className={s.loader}>
          <PacmanLoader color="#ffd600" />
        </div>
      )}
      {isError ? (
        <p className={s.error}>
          Sorry, may be an error!
          <br />
          Please try again later!
        </p>
      ) : (
        <ContactList />
      )}
    </div>
  );
};

export default App;
