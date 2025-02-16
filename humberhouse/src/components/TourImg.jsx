import React, { useState } from "react";
import FullIn from "../assets/icons/FullIn.png";

const TourImg = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="tour-img-container"
    onClick={toggleFullScreen}

    >
      {/* Image Display with Background */}

      <div className="FullScreenBtn">
        <img src={FullIn} alt="Full Screen" onClick={toggleFullScreen} />
      </div>
      <div
        className="image-wrapper"
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
      >
        <div className="subtext-container">
          <div>
          <button className="nav-arrow" onClick={(e) => { e.stopPropagation(); prevImage(); }}>❮</button>
          <p className="subtext">{images[currentIndex].subtext}</p>
          <button className="nav-arrow" onClick={(e) => { e.stopPropagation(); nextImage(); }}>❯</button>
          </div>
          <p className="image-counter">{currentIndex + 1} / {images.length}</p>

        </div>
      </div>

      {/* Full-Screen Mode */}
      {isFullScreen && (
        <div className="fullscreen-overlay" onClick={toggleFullScreen}>
          <button className="nav-btn left" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#8592;</button>
          <div
            className="fullscreen-image"
            style={{ backgroundImage: `url(${images[currentIndex].src})` }}
          />
          <button className="nav-btn right" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#8594;</button>
          <div className="fullscreen-subtext-container">
            <div>
              <button className="nav-arrow" onClick={(e) => { e.stopPropagation(); prevImage(); }}>❮</button>
              <p className="fullscreen-subtext">{images[currentIndex].subtext}</p>
              <button className="nav-arrow" onClick={(e) => { e.stopPropagation(); nextImage(); }}>❯</button>
              </div>

              <p className="fullscreen-image-counter">{currentIndex + 1} / {images.length}</p>
          </div>
          <button className="close-btn" onClick={toggleFullScreen}>✕</button>
        </div>
      )}
    </div>
  );
};

export default TourImg;
