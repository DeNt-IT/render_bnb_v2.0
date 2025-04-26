import "../../../../css/DeNt/ProfEditPage/ProfEditPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from  "@fortawesome/free-brands-svg-icons";
import { faInstagram } from  "@fortawesome/free-brands-svg-icons";

export const PFooter = () => {

    return(
        
        <div className="p-footer-wrapper-g">
            <div className="p-f-left-c">
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
            <div className="p-f-right-c">
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