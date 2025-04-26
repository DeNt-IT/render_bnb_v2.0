import React, { useState } from 'react';
import '../../../../../css/Eli/ByePage/ByePageGallery.css';

const imagesContext = require.context('../../../../../img/Eli/Photo', false, /\.(png|jpe?g|svg)$/);
const images = imagesContext.keys().map((key) => 
{
    return { path: imagesContext(key), name: key };
});

const sortedImages = images
    .map(image => 
    {
        const match = image.name.match(/Photo(\d+)/);
        if (match) 
        {
            return { ...image, number: parseInt(match[1], 10) };
        }
        return null;
    })
    .filter(image => image !== null)
    .sort((a, b) => a.number - b.number);

const Photo = () => 
{
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => 
    {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sortedImages.length);
    };

    const prevImage = () => 
    {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + sortedImages.length) % sortedImages.length
        );
    };

    return (
        <div className="photo-container">
            <div className="photo-grid">
                {sortedImages.map((image, index) => (
                    <div
                        key={index}
                        className={`photo-item ${index === 0 ? 'large' : 'small'}`}
                    >
                        <img src={image.path} alt={`Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="photo-slider">
                <button className="arrow left-arrow" onClick={prevImage}>&#9664;</button>
                <img src={sortedImages[currentIndex].path} alt={`Photo ${currentIndex + 1}`} />
                <button className="arrow right-arrow" onClick={nextImage}>&#9654;</button>
            </div>
        </div>
    );
};

export default Photo;
