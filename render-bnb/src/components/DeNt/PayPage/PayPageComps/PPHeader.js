import "../../../../css/DeNt/PayPage/PayPage.css"
import { useNavigate } from "react-router-dom";

export const PPHeader = () => {

    const navigate = useNavigate();

    function handleClick(event) {

        navigate('/');
    }

    return(

        <div className = "pp-header-wrapper">
            <div className = "pp-header-logo-container">
                <div className = "pp-header-logo" onClick={handleClick}>
                    HomeFU
                </div>
            </div>
        </div>
    );
}