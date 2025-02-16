import React from 'react';
import Banner from '../components/Banner';
import ImgChange from '../components/ImgChange';


const Home = () => {
  return (
    <div className='Home'>
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
