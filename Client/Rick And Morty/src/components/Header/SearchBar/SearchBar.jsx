import React, { useState } from 'react';
import Style from './SearchBar.module.css';

const SearchBar = ({ onSearch, randomAdd }) => {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input
        placeholder=" 1,2,3...."
        className={Style.SearchBar}
        type="search"
        value={id}
        onChange={handleChange}
      />
      <button className={Style.Button} onClick={() => onSearch(id)}>
        buscar
      </button>
      <button className={Style.Button2} onClick={() => randomAdd()}>
        random
      </button>
      <img className={Style.Curita4} src="http://clipart-library.com/img/1178511.png" alt="" />
      <img className={Style.Curita5} src="http://clipart-library.com/img/1178511.png" alt="" />
      <img className={Style.Curita5} src="http://clipart-library.com/img/1178511.png" alt="" />
      <img className={Style.Curita5} src="http://clipart-library.com/img/1178511.png" alt="" />
    </div>
  );
};

export default SearchBar;

