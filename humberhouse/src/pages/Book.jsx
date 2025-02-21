import React from 'react';
import Calendar from '../components/Calendar';
import { Helmet } from "react-helmet-async";

const Book = () => {
  return (
    <div className='BookPage'>
      <Helmet>
        <title>House at Humber | Book Your Stay</title>
        <meta 
          name="description" 
          content="Reserve your stay at House at Humber. Call (709) 765-7602 to book your dates and enjoy a relaxing getaway in Humber Valley Resort, Corner Brook." 
        />
      </Helmet>

      <div className='BookPageHead'>
        <p>
          <span className='BookDatesHead'>Book Dates</span><br />
          Please call (709) 765-7602 to book
        </p>
      </div>
      
      <Calendar />
    </div>
  );
};

export default Book;
