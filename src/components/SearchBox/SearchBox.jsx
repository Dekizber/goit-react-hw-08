import { useDispatch, useSelector } from "react-redux";
import { searchFilter } from "../../redux/filters/filtersSlice";
import clsx from "clsx";
import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/contacts/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  return (
    <div className={clsx(s.container)}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(searchFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
