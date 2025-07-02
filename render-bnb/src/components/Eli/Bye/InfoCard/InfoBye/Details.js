import React from 'react';
import InfoContainer from './InfoContainer';
import PriceDetails from './PriceDetails';
import '../../../../../css/Eli/ByePage/ByePageInfo.css';

const Details = ({ price, rating }) => {
  return (
    <div className="info-wrap">
      <InfoContainer />
      <PriceDetails price={price} rating={rating} />
    </div>
  );
};

export default Details;

