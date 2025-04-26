import { useNavigate } from 'react-router-dom'; /*хук для перехода на новую стр*/
import '../../../../../css/Eli/MainPage/MainPageCard.css';
import star from '../../../../../img/Eli/Card/star.png';
import heart from '../../../../../img/Eli/Card/heart.png';

/*ПЕРЕДАЧА ПРОПС ИЗ РОДИТЕЛЬСКОГО КОМПОНЕНТА ЧЕРЕЗ АТРИБУТЫ*/
/*Использует пропсы: Для отображения изображения, информации о рейтинге, дате, цене и навигации */
const Card = ({ image, rating, dateRange, price, days, isChecked, index }) => 
{
    const navigate = useNavigate(); /*новая стр*/
    function handleclick(event) /*при клике на картинку событие onClick вызывает эту функцию для перехода на вторую стр только с 1 картинки */
    {
        if (index === 0) {  navigate("/byepage"); }
    }
    /*index отправление поведения при клике, для перехода на новую стр */

    return (

        /*image установка источника картинки*/
        /*rating передается для отображения рейтинка в карточке*/
        /*dateRange отображается как диапазон дат*/

        /*price отображение даты, +проверка как отображать (ночь или общее) */ 
        /*isChecked определяет отображать общую стоимость или за ночь*/
        <div className="card" onClick={handleclick}>

            <img src={image} alt="Card" className="card-image" />  
            <img src={heart} alt="Heart" className="heart-icon" />
            
            
            <div className="card-info">
                <div className="location">
                    <span>Odesa, Ukraine</span>
                    <div className="star-ratingMain">
                        <img src={star} alt="Star" className='star-img-main' />
                        <span>{rating}</span> 
                    </div>
                </div>

                <div className="description addinfo">Біля моря</div>
                <div className="addinfo">{dateRange}</div>
                
                <div className="price">
                    {isChecked ? `$${price} за ${days} ночей` : `$${price} за ніч`}
                </div>
            </div>
            
        </div>
    );
};

export default Card;
