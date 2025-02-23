import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import TourImg from '../components/TourImg';
import PetImg from '../assets/icons/Pets.svg';
import WasherImg from '../assets/icons/Washer.svg';
import KitchenImg from '../assets/icons/Kitchen.svg';
import ParkingImg from '../assets/icons/Parking.svg';
import AirImg from '../assets/icons/AC.svg';
import NoSmokeImg from '../assets/icons/Smoking.svg';
import SingleBed from '../assets/icons/SingleBed.svg';
import QueenBed from '../assets/icons/QueenBed.svg';
import Shower from '../assets/icons/Shower.svg';
import Bath from '../assets/icons/Bath.svg';
import Toilet from '../assets/icons/Toilet.svg';
import MenuIcon from '../assets/icons/Menu.png';

import BedNTwin1 from '../assets/imgs/tour/BedNTwin1.jpg';
import BedNTwin2 from '../assets/imgs/tour/BedNTwin2.jpg';
import BedNTwin3 from '../assets/imgs/tour/BedNTwin2.jpg';

import DiningRoom1 from '../assets/imgs/tour/DiningRoom1.jpg';
import DiningRoom2 from '../assets/imgs/tour/DiningRoom2.jpg';
import DiningRoom3 from '../assets/imgs/tour/DiningRoom3.jpg';

import DownBed1 from '../assets/imgs/tour/DownBed1.jpg';
import DownBed2 from '../assets/imgs/tour/DownBed2.jpg';
import DownBed3 from '../assets/imgs/tour/DownBed3.jpg';

import Entrance1 from '../assets/imgs/tour/Entrance1.png';
import Entrance2 from '../assets/imgs/tour/Entrance2.jpg';
import Entrance3 from '../assets/imgs/tour/Entrance3.jpg';

import Kitchen1 from '../assets/imgs/tour/Kitchen1.jpg';
import Kitchen2 from '../assets/imgs/tour/Kitchen2.jpg';

import LivingRoom1 from '../assets/imgs/tour/LivingRoom1.jpg';
import LivingRoom2 from '../assets/imgs/tour/LivingRoom2.jpg';

import MasterBed1 from '../assets/imgs/tour/MasterBed1.jpg';
import MasterBed2 from '../assets/imgs/tour/MasterBed2.jpg';
import MasterBed3 from '../assets/imgs/tour/MasterBed3.jpg';
import MasterBed4 from '../assets/imgs/tour/MasterBed4.jpg';
import MasterBed5 from '../assets/imgs/tour/MasterBed5.jpg';

import Office1 from '../assets/imgs/tour/Office1.jpg';

import TwoTwins1 from '../assets/imgs/tour/TwoTwins1.jpg';
import TwoTwins2 from '../assets/imgs/tour/TwoTwins2.jpg';

import { Link } from 'react-router-dom';

const Tour = () => {
  // Single state variable to sync both dropdowns
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const faqs = [
    {question: "How close is the golf course?", answer: "The River golf course is a 2 minute walk from the rental!."},
    {question: "Is there wifi included?", answer: "Yes, wifi is included."},
    {question: "Are there Tv's in the house?", answer: "Yes, there are Tv's in almost every room."},
    {question: "Is the rental kid friendly?", answer: "Yes, the rental is kid friendly. We have some toys and chidren's utensils."},
    {question: "How close is the nearest grocery store?", answer: "The nearest grocery store is a 10 minute drive away."},
    {question: "How close is the ski hill?", answer: "Marble Mountain ski resort is right outside of Humber Valley Resort."},
  ];

  const imageArray = [
    { src: Entrance1, subtext: "Entrance" },
    { src: Entrance2, subtext: "Entrance" },
    { src: Entrance3, subtext: "Entrance" },
    { src: LivingRoom1, subtext: "Living Room" },
    { src: LivingRoom2, subtext: "Living Room" },
    { src: Kitchen1, subtext: "Kitchen" },
    { src: Kitchen2, subtext: "Kitchen" },
    { src: DiningRoom1, subtext: "Dining Room" },
    { src: DiningRoom2, subtext: "Dining Room" },
    { src: DiningRoom3, subtext: "Dining Room" },
    { src: MasterBed1, subtext: "Master Bedroom" },
    { src: MasterBed2, subtext: "Master Bedroom" },
    { src: MasterBed3, subtext: "Master Bedroom" },
    { src: MasterBed4, subtext: "Master Bedroom" },
    { src: MasterBed5, subtext: "Master Bedroom" },
    { src: DownBed1, subtext: "Downstairs Bedroom" },
    { src: DownBed2, subtext: "Downstairs Bedroom" },
    { src: DownBed3, subtext: "Downstairs Bedroom" },
    { src: BedNTwin1, subtext: "Bedroom with Twin Bed" },
    { src: BedNTwin2, subtext: "Bedroom with Twin Bed" },
    { src: BedNTwin3, subtext: "Bedroom with Twin Bed" },
    { src: TwoTwins1, subtext: "Bedroom with Two Twins" },
    { src: TwoTwins2, subtext: "Bedroom with Two Twins" },
    { src: Office1, subtext: "Office" },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Toggle function will open/close both sections together
  const toggleDropdowns = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='TourPage'>
            <Helmet>
        <title>House at Humber | Tour</title>
        <meta 
          name="description" 
          content="Explore a cozy vacation rental with comfortable bedrooms, modern amenities, and a welcoming atmosphere. Perfect for a relaxing getaway with pet-friendly options, parking, and more!" 
        />
      </Helmet>
      <div className='Tour'>
        <div className='TourTitle'>
          <Link to='/'>&lt; Back</Link>
          <h2>Tour</h2>
        </div>

        <TourImg images={imageArray} />

        <div className='TourListCont'>
          <h3>Amenities</h3>
          <div className='TourList'>
            <div className='TourItem'>
              <img src={PetImg} alt="Pet Friendly" />
              <p>Pet Friendly</p>
            </div>
            <div className='TourItem'>
              <img src={WasherImg} alt="Washer & Dryer" />
              <p>Washer & Dryer</p>
            </div>
            <div className='TourItem'>
              <img src={KitchenImg} alt="Full Kitchen" />
              <p>Full Kitchen</p>
            </div>
            <div className='TourItem'>
              <img src={ParkingImg} alt="Parking" />
              <p>Parking</p>
            </div>
            <div className='TourItem'>
              <img src={AirImg} alt="Air Conditioning" />
              <p>Air Conditioning</p>
            </div>
            <div className='TourItem'>
              <img src={NoSmokeImg} alt="No Smoking" />
              <p>No Smoking</p>
            </div>
          </div>
        </div>

        <div className='RoomnBath'>
          <div className='TourListContRoom'>
            <h3 
              onClick={toggleDropdowns} 
              style={{ cursor: 'pointer' }}
            >
              Bedrooms {dropdownOpen ? '▲' : '▼'}
            </h3>
            {dropdownOpen && (
              <div className='TourListRoom'>
                <div className=' Rooms'>
                  <div className='RoomImg'>
                    <img src={QueenBed} alt="Room 1" />
                  </div>
                  <div className='RoomDesc'>
                    <h4>Room 1</h4>
                    <p>One Queen Bed</p>
                  </div>
                </div>
                <div className=' Rooms'>
                  <div className='RoomImg'>
                    <img src={QueenBed} alt="Room 2" />
                    <img src={SingleBed} alt="Room 2" />
                  </div>
                  <div className='RoomDesc'>
                    <h4>Room 2</h4>
                    <p>One Single <br />One Queen Bed</p>
                  </div>
                </div>
                <div className=' Rooms'>
                  <div className='RoomImg'>
                    <img src={SingleBed} alt="Room 3" />
                    <img src={SingleBed} alt="Room 3" />
                  </div>
                  <div className='RoomDesc'>
                    <h4>Room 3</h4>
                    <p>Two Single Beds</p>
                  </div>
                </div>
                <div className=' Rooms'>
                  <div className='RoomImg'>
                    <img src={QueenBed} alt="Room 4" />
                  </div>
                  <div className='RoomDesc'>
                    <h4>Room 4</h4>
                    <p>One Queen Bed</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className='TourListContBath'>
            <h3 
              onClick={toggleDropdowns} 
              style={{ cursor: 'pointer' }}
            >
              Bathrooms {dropdownOpen ? '▲' : '▼'}
            </h3>
            {dropdownOpen && (
              <div className='TourListRoom'>
                <div className=' Rooms'>
                  <div className='RoomImg'>
                    <img src={Toilet} alt="Bathroom 1" />
                    <img src={Shower} alt="Bathroom 1" />
                  </div>
                  <div className='RoomDesc'>
                    <h4>Bathroom 1</h4>
                    <p>Bath | Toilet | Shower</p>
                  </div>
                </div>
                <div className=' Rooms'>
                  <div className='RoomImg'>
                    <img src={Toilet} alt="Bathroom 2" />
                    <img src={Shower} alt="Bathroom 2" />
                  </div>
                  <div className='RoomDesc'>
                    <h4>Bathroom 2</h4>
                    <p>Bath | Toilet | Shower</p>
                  </div>
                </div>
                <div className=' Rooms'>
                  <div className='RoomImg'>
                    <img src={Toilet} alt="Bathroom 3" />
                    <img src={Shower} alt="Bathroom 3" />
                  </div>
                  <div className='RoomDesc'>
                    <h4>Bathroom 3</h4>
                    <p>Bath | Toilet | Shower</p>
                  </div>
                </div>
                <div className=' Rooms'>
                  <div className='RoomImg'>
                    <img src={Toilet} alt="Bathroom 4" />
                    <img src={Shower} alt="Bathroom 4" />
                  </div>
                  <div className='RoomDesc'>
                    <h4>Bathroom 4</h4>
                    <p>Bath | Toilet | Shower</p>
                  </div>
                </div>
                <div className=' Rooms'>
                  <div className='RoomImg'>
                    <img src={Toilet} alt="Bathroom 5" />
                  </div>
                  <div className='RoomDesc'>
                    <h4>Bathroom 5</h4>
                    <p>Toilet</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>










        <div className='RoomnBath Space'>
          <div className='TourListContRoom'>
            <h3 
              onClick={toggleDropdowns} 
              style={{ cursor: 'pointer' }}
            >
              Spaces {dropdownOpen ? '▲' : '▼'}
            </h3>
            {dropdownOpen && (
              <div className='TourListRoom'>
                <div className=' Rooms'>
                  <div className='RoomDesc'>
                    <h4>Patio</h4>
                    <p>Spacious Deck with table and chairs</p>
                  </div>
                </div>
                <div className=' Rooms'>
                  <div className='RoomDesc'>
                    <h4>Yard</h4>
                    <p>Private Yard with a firepit and games</p>
                  </div>
                </div>
                <div className=' Rooms'>
                  <div className='RoomDesc'>
                    <h4>Balcony</h4>
                    <p>Bottom floor bedrooms have large balconies</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        <div className='FAQSection'>
        <h3>Frequently Asked Questions</h3>
        <div className='FAQList'>
        {faqs.map((faq, index) => (
            <div key={index} className='FAQItem'                 onClick={() => toggleFAQ(index)}
>
              <div 
                className='FAQQuestion' 
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <img src={MenuIcon} alt="" />
                <span className='Question'>{faq.question}</span>
              </div>
              {openFAQ === index && (
                <div className='FAQAnswer'>
                  <p> - {faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

          {/* FAQ */}
          {/* Div with drop downs of each question. Each question has a 3 line menu icon */}

          {/* VIEW OF GOLF COURSE? */}

          {/* IS THERE WIFI INCLUDED */}

          {/* IS THERE A BBQ */}

          {/* IS THERE A TV */}

          {/* IS IT KID FRIENDLY - TOYS GAMES - KIDS UTENSTILS */}


          {/* HOW CLOSE TO SHOPS */}

          {/* HOW CLOSE TO BEACH */}

          {/* HOW CLOSE TO SKI HILL */}
          


      </div>
    </div>
  );
};

export default Tour;
