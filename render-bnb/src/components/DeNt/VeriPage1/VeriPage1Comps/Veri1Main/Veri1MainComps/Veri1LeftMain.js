import "../../../../../../css/DeNt/VeriPage1/VeriPage1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { faCircle as FaCirclFat } from "@fortawesome/free-solid-svg-icons"

export const Veri1LeftMain = () => {

    const navigate = useNavigate();

    function handleClick(event) {

        navigate("/veripage2")
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

        <div className = "v-1-left-main-container">
            <div className = "v-1-left-main-content-c">
                <div className = "v-1-l-main-content-top">
                    <div style = {{fontSize: 20, fontWeight: 700}} className = "v-1-l-main-content-top-text">
                        Додайте посвідчення особи державного зразка
                    </div>
                    <div className = "v-1-l-main-content-top-text">
                        Вам потрібно буде додати посвідчення особи державного зразка. Цей крок допоможе переконатися, що це справді ви.
                    </div>
                </div>
                <div className = "v-1-l-main-content-bot">
                    <div style = {{fontSize: 17, fontWeight: 700}}>
                        Завантажити наявну фотографію <FontAwesomeIcon style = {{marginLeft: 131.5}} icon={icon1} onClick={changeIcon1} />
                    </div>
                    <div>
                        Рекомендовано
                    </div>
                    <hr />
                    <div style = {{fontSize: 17, fontWeight: 700}}>
                        Зробіть фотографію за допомогою вебкамери <FontAwesomeIcon style = {{marginLeft: 30}} icon={icon2} onClick={changeIcon2} />
                    </div>
                    <div>
                        
                    </div>
                    <hr />

                    <div className="v-1-l-main-content-button" onClick={handleClick}>
                        Продовжити
                    </div>
                </div>
            </div>
        </div>
    );
}