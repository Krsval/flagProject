import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, setSearchParams }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const searchItem = e.target.value;
    setInputValue(searchItem);
    onSearch(searchItem);

  }

  return (
    <div className='SearchBar'>
        <input 
          type='text' 
          value={inputValue}
          onChange={handleInputChange} 
        />
        <span className={inputValue ? 'active' : ''}>Search for a country..</span>
    </div>
  );
};

export default SearchBar;
