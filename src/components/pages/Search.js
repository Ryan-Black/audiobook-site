import React from 'react';
import SearchBar from '../SearchBar';
import Container from '@material-ui/core/Container';
import BookCover from '../BookCover';

const Search = () => {
  return (
    <div className="search">
      <SearchBar />
      <Container>
        <div className="book-container">
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
        </div>
      </Container>
    </div>
  );
};

export default Search;
