import "../../../../../css/DeNt/GuestPage/GuestPage.css"
import { useNavigate } from "react-router-dom";

function Logo() {

    const navigate = useNavigate();

    function handleClick(event) {

        navigate("/");
    }

    return(

        <div className = 'logo' onClick={handleClick}>
            HomeFU
        </div>
    );
}

export default Logo;