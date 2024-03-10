import React, { useState } from 'react';
import './SearchBar.css';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  searchParams.entries()


  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setInputValue(searchTerm);

    if (searchTerm) {
      setSearchParams({ search: searchTerm });
    } else {
      const params = new URLSearchParams(searchParams);
      params.delete('search');
      setSearchParams(params);
    }
  };

  return (
    <div className='SearchBar'>
      <input 
        type='text' 
        value={inputValue}
        onChange={handleChange} 
      />
      <span className={inputValue ? 'active' : ''}>Search for a country..</span>
    </div>
  );
};

export default SearchBar;