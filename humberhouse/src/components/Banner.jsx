import React from 'react'
import { images } from "../constants/images";
import { Link } from "react-router-dom";

const Banner = () => {


  return (
    <div 
      className="Banner" 
    >
      <div className='BannerFiller'></div>
      <div className='Headline'>
        <h2>Time to get away!</h2>
        <Link to={"/tour"} className='BannerBtn'>
        Virtual Tour
        </Link>
      </div>
    </div>
  )
}

export default Banner