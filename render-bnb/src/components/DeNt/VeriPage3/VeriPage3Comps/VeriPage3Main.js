import "../../../../css/DeNt/VeriPage3/VeriPage3.css"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard} from '@fortawesome/free-regular-svg-icons'
import { faCreditCard} from '@fortawesome/free-regular-svg-icons'

export const Veri3Main = () => {

    const navigate = useNavigate();

    function handleClickBack(event) {

        navigate('/veripage2');
    }
    function handleClickFinish(event) {

        navigate('/guestpage');
    }

    return(

        <div className="veri-3-main-wrapper">
            <div className="veri-3-content-container">
                <div className="veri-3-content-top">
                    <div style={{fontSize: 20, fontWeight: 700}}>
                        Завантажте зображення свого посвідчення водія
                    </div>
                    <div>
                    Фотографії не мають бути розмиті, а на лицевому боці <br />
                    посвідчення водія має бути чітко видно ваше обличчя.
                    </div>
                </div>
                <div className="veri-3-content-choice">
                    <div className="veri-3-content-choice-box">
                        <FontAwesomeIcon style = {{fontSize: 20}}icon={faAddressCard} />
                        <div style={{fontSize: 13, fontWeight: 700}}>
                            Завантажте лицевий бік
                        </div>
                        <div>
                            Лише JPEG або PNG
                        </div>
                    </div>
                    <div className="veri-3-content-choice-box">
                        <FontAwesomeIcon style = {{fontSize: 20}} icon={faCreditCard} />
                        <div style={{fontSize: 13, fontWeight: 700}}>
                            Завантажте зворотній бік
                        </div>
                        <div>
                            Лише JPEG або PNG
                        </div>
                    </div>
                </div>
                <div className="veri-3-bot">
                    <div onClick={handleClickBack}>
                        &lt; Назад
                    </div>
                    <div className="v-1-l-main-content-button" onClick={handleClickFinish}>
                        Завершити
                    </div>
                </div>
            </div>
        </div>
    );
}