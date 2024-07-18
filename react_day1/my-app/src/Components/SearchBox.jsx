const SearchBox = ({ placeholder, onSearch, searchTerm }) => {


  return (
    <input
      type="text"
      placeholder={placeholder}
      value={searchTerm}
      onChange={onSearch}
      style={{ padding: '10px', fontSize: '16px', width: '100%', margin:'20px'}}
    />
  );
};

export default SearchBox;
