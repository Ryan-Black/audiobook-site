import React from 'react';
import SectionTitle from '../SectionTitle';
import BookCover from '../BookCover';
import DailyDeal from '../DailyDeal';
import Container from '@material-ui/core/Container';

const Home = () => {
  return (
    <Container>
      <div className="home">
        <h1 className="home-header">Featured Books</h1>
        <SectionTitle section_title="Most Popular" />
        <div className="book-container">
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
        </div>
        <SectionTitle section_title="New Releases" />
        <div className="book-container">
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
        </div>
        <DailyDeal />
        <SectionTitle section_title="Featured Pre-Orders" />
        <div className="book-container">
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
        </div>
        <SectionTitle section_title="Based on your recent views" />
        <div className="book-container">
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
          <BookCover />
        </div>
      </div>
    </Container>
  );
};

export default Home;
