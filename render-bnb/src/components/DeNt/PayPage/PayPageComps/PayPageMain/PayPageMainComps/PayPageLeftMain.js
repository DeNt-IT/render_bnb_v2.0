import "../../../../../../css/DeNt/PayPage/PayPage.css"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as FaCirclFat} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export const PPLeftMain = () => {

    const navigate = useNavigate();

    function handleClick(event) {

        navigate('/');
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
                            4-9 січ.2024
                        </div>
                    </div>
                    <div className = "trip-text-container">
                        <div className = "t-txt-top">
                            <span>Гості</span>
                            <span style = {{textDecoration: "underline"}}>Редагувати</span>
                        </div>
                        <div style = {{fontWeight: 400}}className = "t-txt-top">
                            1 гість
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
                                Сплатіть усю суму ($335,00) одразу.
                            </div>
                        </div>
                        <div style = {{borderBottom: "none"}}className = "pay-opt-var-cont">
                            <div style = {{marginTop: 20, marginLeft: 20, fontWeight: 700}}>
                                Оплата двома частинами <FontAwesomeIcon style = {{marginLeft: 312}} icon={icon2} onClick={changeIcon2}/>
                            </div>
                            <div style = {{marginLeft: 20}}>
                                $65,60 потрібно оплатити сьогодні, $262,40 - 22 груд. 2023р
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
                            <input name='cardnum' placeHolder='Номер Картки' />
                        </div>
                        <div className = 'dpl-bot-sec'>
                            <div style={{borderRight: "1px solid #211E1A"}}className='dpl-bot-sec-sec'>
                                <input name='carddate' placeHolder='Термін Дії' />
                            </div>
                            <div className='dpl-bot-sec-sec'>
                                <input name='cardcvv' placeHolder='CVV' />
                            </div>
                        </div>
                    </div>
                    <div className="pay-line">
                        <input name='cardidx' placeHolder='Індекс' />
                    </div>
                    <div className="pay-line">
                        <input name='cardcountry' placeHolder='Країна/Регіон' />
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