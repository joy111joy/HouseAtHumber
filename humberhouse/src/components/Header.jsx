import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='Header'>
      <Link to={"/"}>
        <h1>House<br className='TitleBreak'></br> at Humber</h1>
      </Link>

        <Link to="/bookDates" className='BookLink'>Book Dates</Link>
    </div>
  )
}

export default Header;