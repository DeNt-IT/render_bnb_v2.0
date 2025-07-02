import React from 'react';
import InfoContainer from './InfoContainer';
import PriceDetails from './PriceDetails';
import '../../../../../css/Eli/ByePage/ByePageInfo.css';

const Details = ({ price, rating, days }) => {
  return (
    <div className="info-wrap">
      <InfoContainer />
      <PriceDetails price={price} rating={rating} days={days} />
    </div>
  );
};

export default Details;

