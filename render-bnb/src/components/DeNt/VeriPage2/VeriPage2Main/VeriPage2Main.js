import "../../../../css/DeNt/VeriPage2/VeriPage2.css"
import "../../../../css/DeNt/VeriPage1/VeriPage1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { Route, useNavigate } from "react-router-dom"
import { useState } from "react"
import { faCircle as FaCirclFat } from "@fortawesome/free-solid-svg-icons"

export const VeriPage2Main = () => {

    const navigate = useNavigate();

    function handleClick(event) {

        navigate('/veripage1');
    }
    function handleClickNext(event) {

        navigate('/veripage3');
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

    const [icon3, setIcon3] = useState(faCircle);
    const changeIcon3 = () => {

        if(icon3 !== faCircle) {

            setIcon3(faCircle);
        }
        else {

            setIcon3(FaCirclFat);
        }
    }

    return(

        <div className="veri-page-2-main-container">
            <div className = "veri-p-2-main-content-c">
                <div className = "vp-2-main-content-box">
                    <div style = {{fontSize: 20, fontWeight: 700}}>
                        Виберіть відповідний тип посвідчення особи
                    </div>
                    <div className = "vp-2-main-content-smth">

                    </div>
                </div>
                <div style = {{gap: 35}} className = "vp-2-main-content-box">
                    <div>
                        Посвідчення водія <FontAwesomeIcon style = {{marginLeft: 310}} icon={icon1} onClick={changeIcon1}/>
                    </div>
                    <hr />
                    <div>
                        Паспорт <FontAwesomeIcon style = {{marginLeft: 368}} icon={icon2} onClick={changeIcon2}/>
                    </div>
                    <hr />
                    <div>
                        Посвідчення особи <FontAwesomeIcon style = {{marginLeft: 307.5}} icon={icon3} onClick={changeIcon3}/>
                    </div>
                </div>
                <div style = {{padding: 10, fontSize: 15}} className = "vp-2-main-content-box">
                    Ваше посвідчення особи оброблятиметься відповідно до нашої Політики конфіденційності та не надаватиметься господарю або гостям.
                </div>
                <div className = "vp-2-main-content-box">
                    <hr />
                </div>
                <div className="last-row">
                    <div onClick={handleClick}>
                        &lt; Назад
                    </div>
                    <div style = {{justifySelf: 'right'}}className="v-1-l-main-content-button" onClick={handleClickNext}>
                        Продовжити
                    </div>
                </div>
            </div>
        </div>
    );
}