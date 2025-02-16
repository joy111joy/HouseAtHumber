import React from 'react'
import Calendar from '../components/Calendar'

const Book = () => {
  return (
    <div className='BookPage'>
        <div className='BookPageHead'>
        <p><span className='BookDatesHead'>Book Dates </span><br></br> Please select the start and end date of your stay</p>
        </div>
    <Calendar/>
    </div>

    

  )
}

export default Book