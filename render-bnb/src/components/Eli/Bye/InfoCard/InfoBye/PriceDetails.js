import React from 'react';
import { useNavigate } from 'react-router-dom';
import star from '../../../../../img/Eli/Card/star.png';
import '../../../../../css/Eli/ByePage/ByePageInfo.css';

const PriceDetails = () => {
    const navigate = useNavigate();

    const handleClickPay = () => {
        navigate('/paypage');
    };

    return (
        <div className="absol-container">
            <div className="abcol-block">
                <div className="price-details">
                    <div className="price-for-absol">$70 ніч</div>
                    <div className="reting-fot-absol">
                        <img src={star} alt="Star" className="star-reting" />
                        4,88 . 35 відкуів
                    </div>
                </div>
                <div className="table-details">
                    <div className="first-row">
                        <div className="col1">
                            ПРИБУТТЯ 
                            <div className="data1">04.01.2024</div>
                        </div>
                        <div className="col2">
                            ВИЇЗД
                            <div className="data1">09.01.2024</div>
                        </div>
                    </div>
                    <div className="second-row">
                        ГОСТІ
                        <div className="data1">1 гостя</div>
                    </div>
                </div>
                <div className="but-bye" onClick={handleClickPay}>Заюронювати</div>
                <div className="nobye">Поки що ви нічого не платите</div>
                <div className="bye">
                    <div className="how-much">$70 х 10 ночей</div>
                    <div className="result">$ 700</div>
                </div>
                <div className="bye">
                    <div className="how-much">Плата за прибирання</div>
                    <div className="result">$ 20</div>
                </div>
                <div className="bye-result">
                    <div className="text-result">Усього до спалти податків</div>
                    <div className="result">$ 720</div>
                </div>
            </div>
        </div>
    );
};

export default PriceDetails;
