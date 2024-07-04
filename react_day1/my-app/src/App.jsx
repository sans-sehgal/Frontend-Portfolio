import './App.css'
import { people } from './data'

import PersonCard from './Components/PersonCard'
import SearchBox from './Components/SearchBox';
import DropdownFilter from './Components/DropdownFilter';

import React, { useState } from 'react';


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [professionFilter, setProfessionFilter] = useState([]);



  const onSearch = (event) => {
   
      const value = event.target.value;
      setSearchTerm(value);
  }

  const handleProfessionChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setProfessionFilter((prev) =>
      isChecked ? [...prev, value] : prev.filter((prof) => prof !== value)
    );
  };

  
  const filteredData = people.filter((elem) => {
    const matchesSearch = elem.name.toLowerCase().includes(searchTerm);
    const matchesProfession = professionFilter.length === 0 || professionFilter.includes(elem.profession);
    return matchesSearch && matchesProfession;
  });  
  
  return (
    <>
      <SearchBox placeholder="Search Scientists" onSearch={onSearch} searchTerm={searchTerm}/>
      <DropdownFilter handleProfessionChange={handleProfessionChange} professionFilter={professionFilter}/>

      {filteredData.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </>
  );
}

export default App
