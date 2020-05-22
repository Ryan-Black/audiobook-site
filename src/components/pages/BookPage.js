import React from 'react';
import Container from '@material-ui/core/Container';
import BookCover from '../BookCover';
import SectionTitle from '../SectionTitle';

const BookPage = () => {
  return (
    <Container>
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
            <p>Release Date: 10-03-07</p>
            <p>Language: English</p>
            <p>Publisher: Publisher Name</p>
            <p>Rating: 4.7 (1083 Ratings)</p>
          </div>
        </div>
        <div className="book-page-right">
          <button className="btn">Buy for £21.99</button>
        </div>
      </div>
      <SectionTitle section_title="Summary" />
      <div className="summary">
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam
          doloribus! Fugit architecto delectus reiciendis mollitia sit,
          accusantium quisquam libero minima, quo, laboriosam fuga inventore
          eaque saepe corporis maxime voluptas velit? Modi, repellat? Deleniti
          facilis praesentium expedita maiores, quam possimus molestias saepe
          debitis. Adipisci, nemo?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          quibusdam corporis odio, fugiat quae eum asperiores autem veritatis
          officia qui ipsum deserunt cupiditate expedita beatae eveniet amet
          earum debitis temporibus?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          nulla hic quasi dolorem eius natus ipsam nostrum aut! Asperiores, ea.
        </p>
      </div>
      <SectionTitle section_title="Similar to this..." />
      <div className="book-container">
        <BookCover /> <BookCover /> <BookCover /> <BookCover />
      </div>
    </Container>
  );
};

export default BookPage;
