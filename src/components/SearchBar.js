import React from 'react';

const SearchBar = () => {
  return (
    <form className="search-bar">
      <input
        type="search"
        className="search-input lg-view"
        placeholder="Search by title, author, narrator or genre"
      />
      <input
        type="search"
        className="search-input sm-view"
        placeholder="Search"
      />
      <button className="search-button">X</button>
    </form>
  );
};

export default SearchBar;
