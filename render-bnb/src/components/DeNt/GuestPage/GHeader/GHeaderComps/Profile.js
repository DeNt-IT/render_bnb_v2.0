import "../../../../../css/DeNt/GuestPage/GuestPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
function Profile() {

    return(

        <div className = 'profile-wrapper'>
            <div className = 'profile-burger-container'>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className = 'profile-user-container'>
                <FontAwesomeIcon icon={faUser} />
            </div>
        </div>
    );
}

export default Profile;