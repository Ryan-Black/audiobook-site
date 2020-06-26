import React from 'react';
import Container from '@material-ui/core/Container';
import LibraryBook from '../LibraryBook';

const Library = () => {
  return (
    <div className="library">
      <Container>
        <h1 className="home-header">Library</h1>
        <LibraryBook />
        <LibraryBook />
        <LibraryBook />
        <LibraryBook />
      </Container>
    </div>
  );
};

export default Library;
