import "../../../../../../css/DeNt/VeriPage1/VeriPage1.css"
import { useNavigate } from "react-router-dom";

export const VeriPageHeaderLogo = () => {

    const navigate = useNavigate();

    function handleClick(event) {

        navigate('/');
    }

    return(

        <div className = 'vp-h-logo-container'>
            <div className = 'vp-h-logo-text' onClick={handleClick}>
                HomeFU
            </div>
        </div>
    );
}