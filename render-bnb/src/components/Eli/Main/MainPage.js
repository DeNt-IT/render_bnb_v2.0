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

    const handleToggle = () => { setIsChecked(!isChecked); };
    const handleCategoryChange = (cat) => { setSelectedCategory(cat); };

    return (
        <div className="page-wrap">
            <Header />
            <Nav onToggle={handleToggle} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
            <CardsList isChecked={isChecked} selectedCategory={selectedCategory} />
            <Footer />
        </div>
    );
};

export default MainPage;
