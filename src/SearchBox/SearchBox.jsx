const SearchBox = ({ searchInput, setSearchInput }) => {
  return (
    <div>
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
