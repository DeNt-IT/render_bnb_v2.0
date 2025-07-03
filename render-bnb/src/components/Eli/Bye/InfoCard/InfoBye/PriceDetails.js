import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import star from '../../../../../img/Eli/Card/star.png';
import '../../../../../css/Eli/ByePage/ByePageInfo.css';

const PriceDetails = ({ price, rating, days }) => {
    const navigate = useNavigate();

    const [arrival, setArrival] = useState('');
    const [departure, setDeparture] = useState('');
    const [guests, setGuests] = useState(1);

    const maxDays = parseInt(days, 10) || 0;

    const handleArrivalChange = (e) => {
        const val = e.target.value;
        setArrival(val);
        if (departure && val) {
            const diff = (new Date(departure) - new Date(val)) / 86400000;
            if (diff <= 0 || diff > maxDays) {
                const newDep = new Date(val);
                newDep.setDate(newDep.getDate() + (maxDays > 0 ? 1 : 0));
                setDeparture(newDep.toISOString().split('T')[0]);
            }
        }
    };

    const handleDepartureChange = (e) => {
        const val = e.target.value;
        if (arrival) {
            const diff = (new Date(val) - new Date(arrival)) / 86400000;
            if (diff <= 0) return;
        }
        setDeparture(val);
    };

    const handleClickPay = () => {
        const bookingInfo = {
            arrival,
            departure,
            guests,
            price: parseFloat(price) || 0
        };
        localStorage.setItem('bookingInfo', JSON.stringify(bookingInfo));
        navigate('/paypage');
    };

    const nights = arrival && departure ? Math.round((new Date(departure) - new Date(arrival)) / 86400000) : 0;
    const total = nights * (parseFloat(price) || 0);

    return (
        <div className="absol-container">
            <div className="abcol-block">
                <div className="price-details">
                    <div className="price-for-absol">{price}$ ніч</div>
                    <div className="reting-fot-absol">
                        <img src={star} alt="Star" className="star-reting" />
                        {rating} рейтинг
                    </div>
                </div>
                <div className="table-details">
                    <div className="first-row">
                        <div className="col1">
                            ПРИБУТТЯ
                            <input type="date" value={arrival} onChange={handleArrivalChange} />
                        </div>
                        <div className="col2">
                            ВИЇЗД
                            <input type="date" value={departure} min={arrival} onChange={handleDepartureChange} />
                        </div>
                    </div>
                    <div className="second-row">
                        ГОСТІ
                        <input type="number" min="1" value={guests} onChange={e => setGuests(parseInt(e.target.value,10)||1)} />
                    </div>
                </div>
                <div className="but-bye" onClick={handleClickPay}>Заюронювати</div>
                <div className="nobye">Поки що ви нічого не платите</div>
                <div className="bye">
                    <div className="how-much">{price} х {nights} ночей</div>
                    <div className="result">$ {total}</div>
                </div>
                <div className="bye">
                    <div className="how-much">Плата за прибирання</div>
                    <div className="result">$ 20</div>
                </div>
                <div className="bye-result">
                    <div className="text-result">Усього до спалти податків</div>
                    <div className="result">$ {total + 20}</div>
                </div>
            </div>
        </div>
    );
};

export default PriceDetails;

