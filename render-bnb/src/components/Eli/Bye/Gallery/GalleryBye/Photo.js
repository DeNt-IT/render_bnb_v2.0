import React, { useState } from 'react';
import '../../../../../css/Eli/ByePage/ByePageGallery.css';

const Photo = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="photo-container">
      <div className="photo-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`photo-item ${index === 0 ? 'large' : 'small'}`}
          >
            <img src={image} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="photo-slider">
        <button className="arrow left-arrow" onClick={prevImage}>&#9664;</button>
        <img src={images[currentIndex]} alt={`Photo ${currentIndex + 1}`} />
        <button className="arrow right-arrow" onClick={nextImage}>&#9654;</button>
      </div>
    </div>
  );
};

export default Photo;

