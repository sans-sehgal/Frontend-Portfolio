import React, { useState } from 'react';

const SearchBox = ({ placeholder, onSearch, searchTerm }) => {
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   setSearchTerm(value);
  //   onSearch(value);
  // };

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
