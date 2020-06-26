import React from 'react';
import BookCover from './BookCover';

const LibraryBook = () => {
  return (
    <div className="book-page">
      <div className="book-page-left">
        <BookCover />
        <div className="book-page-info">
          <div className="book-page-headings">
            <h1>Book Name</h1>
          </div>
          <p>By: Author Name</p>
          <p>Narrated by: Narrator Name</p>
          <p>Series: Series Name</p>
          <p>Length: 14 hours 45 mins</p>
          <p>Rating: 4.7 (1083 Ratings)</p>
          <p className="link">
            <i class="fas fa-heart"></i> Favourite
          </p>
          <p className="link">
            <i class="fas fa-book"></i> Add to Collection
          </p>
        </div>
      </div>
      <div className="book-page-right">
        <button className="btn">Listen</button>
      </div>
    </div>
  );
};

export default LibraryBook;
