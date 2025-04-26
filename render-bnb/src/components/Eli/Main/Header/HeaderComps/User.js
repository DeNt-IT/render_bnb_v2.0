import '../../../../../css/Eli/MainPage/MainPageHeader.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-regular-svg-icons";

import irina from '../../../../../img/Eli/Gallery/irina.png';

import { useNavigate } from 'react-router-dom';

function User() 
{

    const navigate = useNavigate();

    function handleClick(event) {

        navigate("/guestpage");
    }
    return(

        <div className = 'user-wrap' onClick={handleClick}>
            <div className = 'burger-container'>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className = 'usericon-container'>
                <img src={irina} alt="Star" className="irina-user" />
            </div>
        </div>
    );
}

export default User;