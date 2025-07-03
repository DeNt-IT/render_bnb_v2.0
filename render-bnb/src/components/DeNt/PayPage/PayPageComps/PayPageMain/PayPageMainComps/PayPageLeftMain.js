import "../../../../../../css/DeNt/PayPage/PayPage.css"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as FaCirclFat} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { saveCard } from "../../../../../../services/cardService";
export const PPLeftMain = () => {

    const navigate = useNavigate();

    const [arrival, setArrival] = useState('');
    const [departure, setDeparture] = useState('');
    const [guests, setGuests] = useState(1);

    const [cardNum, setCardNum] = useState('');
    const [cardDate, setCardDate] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [cardIdx, setCardIdx] = useState('');
    const [cardCountry, setCardCountry] = useState('');

    useEffect(() => {
        const info = localStorage.getItem('bookingInfo');
        if (info) {
            const b = JSON.parse(info);
            setArrival(b.arrival || '');
            setDeparture(b.departure || '');
            setGuests(b.guests || 1);
        }
    }, []);

    const nights = arrival && departure ? Math.round((new Date(departure) - new Date(arrival)) / 86400000) : 0;
    const price = (() => {
        const info = localStorage.getItem('bookingInfo');
        if (info) return JSON.parse(info).price || 0;
        return 0;
    })();
    const total = nights * price;

    async function handleClick(event) {
        const card = {
            cardNumber: cardNum,
            expiry: cardDate,
            cvv: cardCvv,
            postalCode: cardIdx,
            country: cardCountry
        };
        try {
            await saveCard(card);
            navigate('/');
        } catch (err) {
            console.error('Save card failed', err);
        }
    }

    const [icon1, setIcon1] = useState(FaCirclFat);

    const changeIcon1 = () => {

        if(icon1 !== FaCirclFat) {

            setIcon1(FaCirclFat);
        }
        else {

            setIcon1(faCircle);
        }
    }
    const [icon2, setIcon2] = useState(faCircle);

    const changeIcon2 = () => {

        if(icon2 !== faCircle) {

            setIcon2(faCircle);
        }
        else {

            setIcon2(FaCirclFat);
        }
    }

    return(

        <div className = "pp-left-main-container">
            <div className = "pp-left-main-content-container">
                <div className = "pp-l-top-txt-c">
                    &lt; Підтвердження й оплата
                </div>
                <div className = "ad-cont">
                    <div style = {{fontSize: 20, fontWeight: 700}}className = "ad-cont-text">
                        Це рідкісна знахідка
                    </div>
                    <div className = "ad-cont-text">
                        Помешкання господаря Марія зазвичай заброньоване.
                    </div>
                </div>
                <div className = "trip-container">
                    Ваша подорож
                    <div className = "trip-text-container">
                        <div className = "t-txt-top">
                            <span>Дати</span>
                            <span style = {{textDecoration: "underline"}}>Редагувати</span>
                        </div>
                        <div style = {{fontWeight: 400}}className = "t-txt-top">
                            {arrival && departure ? `${arrival} - ${departure}` : ''}
                        </div>
                    </div>
                    <div className = "trip-text-container">
                        <div className = "t-txt-top">
                            <span>Гості</span>
                            <span style = {{textDecoration: "underline"}}>Редагувати</span>
                        </div>
                        <div style = {{fontWeight: 400}}className = "t-txt-top">
                            {guests} гість{guests > 1 ? 'і' : ''}
                        </div>
                    </div>
                </div>
                <div className = "pay-container">
                    Виберіть варіант оплати
                    <div className = "pay-opt-container">
                        <div className = "pay-opt-var-cont">
                            <div style = {{marginTop: 20, marginLeft: 20, fontWeight: 700}}>
                                Оплатити в повному обсязі <FontAwesomeIcon style = {{marginLeft: 300}} icon= {icon1} onClick={changeIcon1}/>
                            </div>
                            <div style = {{marginLeft: 20}}>
                                Сплатіть усю суму (${(total + 20).toFixed(2)}) одразу.
                            </div>
                        </div>
                        <div style = {{borderBottom: "none"}}className = "pay-opt-var-cont">
                            <div style = {{marginTop: 20, marginLeft: 20, fontWeight: 700}}>
                                Оплата двома частинами <FontAwesomeIcon style = {{marginLeft: 312}} icon={icon2} onClick={changeIcon2}/>
                            </div>
                            <div style = {{marginLeft: 20}}>
                                {(total * 0.2).toFixed(2)} потрібно оплатити сьогодні, {(total * 0.8 + 20).toFixed(2)} - 22 груд. 2023р
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="pay-method-container">
                        <div className="pay-line">
                            Кредитна або дебетова картка
                        </div>
                        <div className="double-p-line">
                            <div className = "d-p-l-sec">
                                <input name='cardnum' value={cardNum} onChange={e => setCardNum(e.target.value)} placeHolder='Номер Картки' />
                            </div>
                            <div className = 'dpl-bot-sec'>
                                <div style={{borderRight: "1px solid #211E1A"}} className='dpl-bot-sec-sec'>
                                    <input name='carddate' value={cardDate} onChange={e => setCardDate(e.target.value)} placeHolder='Термін Дії' />
                                </div>
                                <div className='dpl-bot-sec-sec'>
                                    <input name='cardcvv' value={cardCvv} onChange={e => setCardCvv(e.target.value)} placeHolder='CVV' />
                                </div>
                            </div>
                        </div>
                        <div className="pay-line">
                            <input name='cardidx' value={cardIdx} onChange={e => setCardIdx(e.target.value)} placeHolder='Індекс' />
                        </div>
                        <div className="pay-line">
                            <input name='cardcountry' value={cardCountry} onChange={e => setCardCountry(e.target.value)} placeHolder='Країна/Регіон' />
                        </div>
                    </div>
                <div className='cancel-rules-container'>
                    <div style={{fontSize: 20, fontWeight: 700}}>
                        Правила скасування бронювання
                    </div>
                    <div>
                        <b>Безкоштовне скасування бронювання до 30 груд.. </b> У разі скасування <br />бронювання до прибуття 4 січ. вам повернуть частину коштів.
                    </div>
                    <div style={{fontSize:17, fontWeight:700, textDecoration: "underline"}}>
                        Докладніше
                    </div>
                </div>
                <div className='rules-container'>
                    <div style={{fontSize: 20, fontWeight: 700}}>
                        Основні правила
                    </div>
                    <div>
                        Ми просимо всіх мандрівників пам’ятати кілька простих правил належної поведінки гостя.
                    </div>
                    <div style={{fontSize: 14}}>
                        &#9679; Дотримуйтеся правил дому
                    </div>
                    <div style={{fontSize: 14}}>
                        &#9679; Ставтеся до помешкання господаря як до власної оселі
                    </div>
                </div>
                <div className='rules-container' style={{borderBottom: 'none', height: 100}}>
                    <div>
                        Натискаючи кнопку нижче, я приймаю умови (Правила дому господаря, Основні правила для 
                        гостей, Правила повторного бронювання та повернення коштів HomeFU), які HomeFU може
                        застосовувати в разі моєї відповідальності за нанесення збитків (стягнути кошти 
                        відповідно до мого способу оплати).
                    </div>
                </div>
                <div className='pay-button' onClick={handleClick}>
                    Підтвердити й оплатити
                </div>
            </div>
        </div>
    );
}