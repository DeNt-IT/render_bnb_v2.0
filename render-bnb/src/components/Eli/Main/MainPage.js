import React, { useState } from 'react';
import '../../../css/Eli/MainPage/MainPageHeader.css';

import Header from './Header/HeaderComp';
import Nav from './Nav/NavComp';
import CardsList from './Card/CardComps';
import Footer from './Footer/FooterComp';

const MainPage = () => 
{
    const [isChecked, setIsChecked] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDestination, setSelectedDestination] = useState('');

    const handleToggle = () => { setIsChecked(!isChecked); };
    const handleCategoryChange = (cat) => { setSelectedCategory(cat); };
    const handleSearch = (destination) => { setSelectedDestination(destination); };

    return (
        <div className="page-wrap">
            <Header onSearch={handleSearch} />
            <Nav onToggle={handleToggle} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
            <CardsList isChecked={isChecked} selectedCategory={selectedCategory} selectedDestination={selectedDestination} />
            <Footer />
        </div>
    );
};

export default MainPage;
