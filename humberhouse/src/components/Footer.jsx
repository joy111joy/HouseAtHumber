import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer'>
      <h1>House at Humber</h1>
      <div className='FootLinks'>
        <Link> Book Dates </Link>
        <Link> Virtual Tour </Link>
      </div>
    </div>
  )
}

export default Footer