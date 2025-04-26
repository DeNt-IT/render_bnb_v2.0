import React from 'react';
import InfoContainer from './InfoContainer';
import PriceDetails from './PriceDetails';
import '../../../../../css/Eli/ByePage/ByePageInfo.css';

const Details = () => {
    return (
        <div className="info-wrap">
            <InfoContainer />
            <PriceDetails />
        </div>
    );
};

export default Details;
