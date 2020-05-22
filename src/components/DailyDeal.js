import React from 'react';
import BookCover from './BookCover';

const DailyDeal = () => {
  return (
    <div className="daily-deal">
      <div className="daily-deal-left">
        <BookCover />
        <div className="daily-deal-info">
          <div className="daily-deal-headings">
            <h2>DAILY DEAL</h2>
            <h1>Book Name</h1>
          </div>
          <p>by Author Name</p>
          <p>narrated by Narrator Name</p>
        </div>
      </div>
      <div className="daily-deal-right">
        <h1>Only £3.99</h1>
        <p>Deal ends at Midnight.</p>
      </div>
    </div>
  );
};

export default DailyDeal;
