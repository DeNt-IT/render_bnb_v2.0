import "../../../../../../css/DeNt/PayPage/PayPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export const PPRightMain = () => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem('bookingInfo');
        if (stored) {
            setInfo(JSON.parse(stored));
        }
    }, []);

    const nights = info && info.arrival && info.departure
        ? Math.round((new Date(info.departure) - new Date(info.arrival)) / 86400000)
        : 0;
    const total = info ? nights * (info.price || 0) : 0;

    return(

        <div className = "pp-right-main-container">
            <div className = "pp-right-main-content-container">
                <div className = "top-sec">
                    <div className = "top-sec-pic-cont" />
                    <div className = "top-sec-txt-container">
                        <div style = {{fontSize: 14}}>
                            Помешкання для оренди цілком
                        </div>
                        <div>
                            Студія та спальня з панорамою моря!<br />Аркадія!
                        </div>
                        <div style={{marginTop: 30}}>
                            <FontAwesomeIcon icon={faStar} style={{marginRight: 10}} />
                            <span style={{marginRight: 10}}>4,95</span>
                            <span style={{textDecoration: "underline"}}><b>35</b> відгуків</span>
                        </div>
                    </div>
                </div>
                <div className="mid-sec">
                    <div style = {{fontSize:20}}className="mid-sec-div">
                        <b>Детальніше про ціну</b>
                    </div>
                    <div className="mid-sec-div">
                        <span>${info ? info.price : 0} x {nights} ночей</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="mid-sec-div">
                        <span>Плата за прибирання</span>
                        <span>$20,00</span>
                    </div>
                </div>
                <div className="bot-sec">
                    <span>Усього</span>
                    <span>${(total + 20).toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}