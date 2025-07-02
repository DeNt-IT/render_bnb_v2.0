import { useNavigate } from 'react-router-dom';
import '../../../../../css/Eli/MainPage/MainPageCard.css';
import star from '../../../../../img/Eli/Card/star.png';
import heart from '../../../../../img/Eli/Card/heart.png';

const Card = ({ image, rating, dateRange, price, days, isChecked, index, location, description }) => {
  const navigate = useNavigate();
  
  function handleclick(event) {
      navigate("/byepage");
  }

  return (
    <div className="card" onClick={handleclick}>
      <img src={image} alt="Card" className="card-image" />  
      <img src={heart} alt="Heart" className="heart-icon" />
      
      <div className="card-info">
        <div className="location">
          <span>{location}</span>
          <div className="star-ratingMain">
            <img src={star} alt="Star" className='star-img-main' />
            <span>{rating}</span> 
          </div>
        </div>

        <div className="description addinfo">{description}</div>
        <div className="addinfo">{dateRange}</div>
        
        <div className="price">
          {isChecked ? `$${price} за ${days} ночей` : `$${price} за ніч`}
        </div>
      </div>
    </div>
  );
};

export default Card;