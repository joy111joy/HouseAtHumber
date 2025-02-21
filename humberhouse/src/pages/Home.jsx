import React from 'react';
import Banner from '../components/Banner';
import ImgChange from '../components/ImgChange';
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <div className='Home'>
      <Helmet>
        <title>House At Humber | Home</title>
        <meta 
          name="description" 
          content="Experience a relaxing getaway at House at Humber, nestled in the stunning Humber Valley Resort, Corner Brook. Enjoy nearby attractions like Marble Mountain ski resort and The River golf course for the perfect blend of adventure and tranquility. Book your stay today!" />      
      </Helmet>
      <Banner />
      <div className='GradBox'></div>

      <div className='HomeCont'>

        <div className='HomeSect'>
          <h2>Located in Beautiful <br></br>Humber Valley Resort, Corner Brook</h2>
          <div className='LocatedImg'></div>

        </div>

        <div className='HomeSect'>
          <h2>Perfect for your next getaway</h2>
          <p>With Marble Mountain ski resort and The River golf course right next door, you'll have the perfect mix of relaxation and adventure during your stay.</p>

          <ImgChange />

        </div>

        <div className='HomeSect'>
          <h2>Book your stay today</h2>
          <p>Reserve your dates today to ensure availability.</p>
        </div>


      </div>
    </div>
  );
};

export default Home;
