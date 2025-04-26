import React from 'react';
import '../../../css/Eli/ByePage/ByePageHeader.css';

import Header from './Header/HeaderBye';
import Gallery from './Gallery/GalleryBye';
import Info from './InfoCard/InfoBye';
import Footer from '../Main/Footer/FooterComp';
import MapComponent from './InfoCard/InfoBye/MapComponent';

const ByePage = () => {
    return (
        <div className="ByePage-wrap">
            <Header />
            <Gallery />
            <Info />
            <MapComponent />
            <Footer />
        </div>
    );
};

export default ByePage;
