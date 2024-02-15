import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='SearchBar'>
        <input 
          type='text' 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <span className={inputValue ? 'active' : ''}>Search for a country..</span>
    </div>
  );
};

export default SearchBar;
