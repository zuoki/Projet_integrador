import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Style from "./Header.module.css";

const Header = ({ onSearch, randomAdd }) => {
  return (
    <header className={Style.Header}>
      <img
        className={Style.logo}
        src="https://image.tmdb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png"
      />
      <SearchBar onSearch={onSearch} randomAdd={randomAdd} />
    </header>
  );
};
export default Header;
