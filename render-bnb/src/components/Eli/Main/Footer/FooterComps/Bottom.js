import '../../../../../css/Eli/MainPage/MainPageFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from  "@fortawesome/free-brands-svg-icons";
import { faInstagram } from  "@fortawesome/free-brands-svg-icons";

const Bottom = () => 
{
    return (
        <div className="p-footer-wrapperMain">
        <div className="p-f-left-cMain">
            <div>
                2022 HomeFU, Inc.
            </div>
            <div>
                Конфінденційність
            </div>
            <div>
                Умови
            </div>
            <div>
                Мапа сайту
            </div>
        </div>
        <div className="p-f-right-cMain">
            <div>
                <FontAwesomeIcon icon={faGlobe} /> Українська (UA)
            </div>
            <div>
                $ USD
            </div>
            <div>
                <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div>
                <FontAwesomeIcon icon={faInstagram} />
            </div>
        </div>
    </div>
    );
}

export default Bottom;
