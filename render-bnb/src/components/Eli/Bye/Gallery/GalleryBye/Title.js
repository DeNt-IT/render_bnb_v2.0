import '../../../../../css/Eli/ByePage/ByePageGallery.css';

import star from '../../../../../img/Eli/Card/star.png';
import heart from '../../../../../img/Eli/Gallery/heart.png';
import shere from '../../../../../img/Eli/Gallery/shere.jpg';

const Title = ({ name, rating, location }) => {
  return (
    <div className="title-wrap">
      <div className='toptitle-container'>{name}</div>
      <div className='bottomtitle-container'>
        <div className="star-rating">
          <img src={star} alt="Star" />
        </div>
        <div className='info-title'>{rating} · {location}</div>
        <div className='addinfo-title'>
          <img src={shere} alt="Shere" className="heart-i" />
          <div className='text-title'>Поділитися</div>
          <img src={heart} alt="Heart" className="heart-i" />
          <div className='text-title'>Зберегти</div>
        </div>
      </div>
    </div>
  );
};
    
export default Title;
