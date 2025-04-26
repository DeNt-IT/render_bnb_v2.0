import React, { useState } from 'react';
import '../../../css/Eli/MainPage/MainPageHeader.css';

import Header from './Header/HeaderComp';
import Nav from './Nav/NavComp';
import CardsList from './Card/CardComps';
import Footer from './Footer/FooterComp';

const MainPage = () => 
{
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => { setIsChecked(!isChecked); };

    return (
        <div className="page-wrap">
            <Header />
            <Nav onToggle={handleToggle} /> 
            <CardsList isChecked={isChecked} />
            <Footer />
        </div>
    );
};

export default MainPage;
