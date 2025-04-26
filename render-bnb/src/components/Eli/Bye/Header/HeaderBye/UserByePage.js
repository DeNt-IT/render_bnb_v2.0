import '../../../../../css/Eli/ByePage/ByePageHeader.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import irina from '../../../../../img/Eli/Gallery/irina.png';
function User() 
{
    return(

        <div className = 'userByePage-wrap'>
            <div className = 'burgerByePage-container'>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className = 'usericonByePage-container'>
                <img src={irina} alt="Star" className="irina-userByePage" />
            </div>
        </div>
    );
}

export default User;