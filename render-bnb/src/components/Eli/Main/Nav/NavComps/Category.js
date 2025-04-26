import React, { useRef, useState, useEffect } from 'react';
import '../../../../../css/Eli/MainPage/MainPageNav.css';

// Импортируем все изображения из папки
const imagesContext = require.context('../../../../../img/Eli/Category', false, /\.(png|jpe?g|svg)$/);
const images = imagesContext.keys().map((key) => {
    return { path: imagesContext(key), name: key };
});


const sortedImages = images
    .map(image => 
    {
        const match = image.name.match(/Category(\d+)/);
        if (match) 
        {
            return { ...image, number: parseInt(match[1], 10) };
        }
        return null; 
    })
    .filter(image => image !== null)
    .sort((a, b) => a.number - b.number);

const defaultCategories = 
[
    'Гарні краєвиди',
    'Невеликі квартирі',
    'Великі квартири',
    'Кімнати',
    'Хостели',
    'Luxe',
    'У центрі міста',
    'Сільська місцевість',
    'Від дизайнера',
    'Біля моря',
    'Особняки',
    'Легендарне'
];

const categories = sortedImages.slice(0, 12).map((image, index) => ({
    image: image.path,
    name: defaultCategories[index]
}));

const Category = () => 
{
    const categoryRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    useEffect(() => 
    {
        const updateArrows = () => 
        {
            const container = categoryRef.current;
            if (container) 
            {
                setShowLeftArrow(container.scrollLeft > 0);
                setShowRightArrow(container.scrollLeft + container.clientWidth < container.scrollWidth);
            }
        };

        updateArrows();
        window.addEventListener('resize', updateArrows);

        return () => 
        {
            window.removeEventListener('resize', updateArrows);
        };
    }, []);

    const scrollLeft = () => 
    {
        if (categoryRef.current) 
        {
            categoryRef.current.scrollBy({
                left: -categoryRef.current.offsetWidth / 2,
                behavior: 'smooth'
            });
            setTimeout(updateArrows, 300);
        }
    };

    const scrollRight = () => 
    {
        if (categoryRef.current) 
        {
            categoryRef.current.scrollBy({
                left: categoryRef.current.offsetWidth / 2,
                behavior: 'smooth'
            });
            setTimeout(updateArrows, 300); 
        }
    };

    const updateArrows = () => 
    {
        const container = categoryRef.current;
        if (container) 
        {
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(container.scrollLeft + container.clientWidth < container.scrollWidth);
        }
    };

    return (
        <div className="category-container">
            <div className={`arrow-left ${showLeftArrow ? 'show-arrow' : ''}`} onClick={scrollLeft}></div>
            <div className="nav-category" ref={categoryRef} onScroll={updateArrows}>
                {categories.map((category, index) => (
                    <div 
                        className={`category-item ${category.name === 'Біля моря' ? 'highlighted' : ''}`} 
                        key={index}
                    >
                        <img src={category.image} alt={`Category ${index + 1}`} />
                        <span>{category.name}</span>
                    </div>
                ))}
            </div>
            <div className={`arrow-right ${showRightArrow ? 'show-arrow' : ''}`} onClick={scrollRight}></div>
        </div>
    );
}

export default Category;
