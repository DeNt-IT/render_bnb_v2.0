import "../../../../../../css/DeNt/VeriPage1/VeriPage1.css"
import { useNavigate } from "react-router-dom";

export const VeriPageHeaderInfo = () => {

    const navigate = useNavigate();

    function handleClick(event) {

        navigate('/guestpage')
    }

    return(

        <div className = 'vp-h-info-container'>
            <div className = "vp-h-info-text">
                Стати господарем
            </div>
            <div className = "vp-h-info-text">
                Збережене
            </div>
            <div className = "vp-h-info-text">
                Подорожі
            </div>
            <div className = "vp-h-info-pfp" onClick={handleClick} />
        </div>
    );
}