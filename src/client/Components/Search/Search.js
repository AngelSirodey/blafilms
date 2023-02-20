import React, { useState } from 'react';

import './Search.css';

const Search = ({searchButton}) => {
  const [inputValue, setInputValue] = useState()

  return (
    <div className="search">
        <input type="text" placeholder="Search..." onChange={(event) => setInputValue(event.target.value)}/>
        <button onClick={() => searchButton(inputValue)}>Search</button>
    </div>
  )
}

export default Search;
