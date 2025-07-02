import { useNavigate } from 'react-router-dom';
import '../../../../../css/Eli/MainPage/MainPageCard.css';
import star from '../../../../../img/Eli/Card/star.png';
import heart from '../../../../../img/Eli/Card/heart.png';

const Card = ({ id, image, rating, dateRange, price, days, isChecked, location, description, name }) => {
  const navigate = useNavigate();

  function handleclick(event) {
<<<<<<< HEAD
      navigate("/byepage");
=======
      navigate(`/byepage/${id}`);
>>>>>>> ae7b1b8e36c6d0b0978ae49620b1bb2b1581fcfd
  }

  return (
    <div className="card" onClick={handleclick}>
      <img src={image} alt="Card" className="card-image" />
      <img src={heart} alt="Heart" className="heart-icon" />

      <div className="card-info">
        <div className="name">{name}</div>
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