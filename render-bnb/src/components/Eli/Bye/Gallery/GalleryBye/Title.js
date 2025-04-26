import '../../../../../css/Eli/ByePage/ByePageGallery.css';

import star from '../../../../../img/Eli/Card/star.png';
import heart from '../../../../../img/Eli/Gallery/heart.png';
import shere from '../../../../../img/Eli/Gallery/shere.jpg';

const Title = () => 
    {
          return (
                <div className = "title-wrap">
                    <div className='toptitle-container'>
                        Студія та спальня з панарамою на місто! Біля моря!
                    </div>
                    <div className='bottomtitle-container'>
                        <div className="star-rating">
                            <img src={star} alt="Star" />
                        </div>
                        <div className='info-title'>4,95 . 35 відгуків .Одеса, Одеська область, Україна</div>
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