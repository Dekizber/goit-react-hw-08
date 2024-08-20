import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/constants";
import { searchFilter } from "../../redux/filtersSlice";
import clsx from "clsx";
import s from "./SearchBox.module.css";

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
