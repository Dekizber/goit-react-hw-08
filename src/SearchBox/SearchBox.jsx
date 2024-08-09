import clsx from "clsx";
import s from "./SearchBox.module.css";

const SearchBox = ({ searchInput, setSearchInput }) => {
  return (
    <div className={clsx(s.container)}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
