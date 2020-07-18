import React from 'react';
import { Link } from 'react-router-dom';

const BookCover = () => {
  return (
    <div className="book-cover">
      <Link to="/book">
        <img src={require('../img/book.jpg')} alt="" />
      </Link>
    </div>
  );
};

export default BookCover;
