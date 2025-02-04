import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='Header'>
        <h1>House<br className='TitleBreak'></br> at Humber</h1>

        <Link to="/">Book Dates</Link>
    </div>
  )
}

export default Header;