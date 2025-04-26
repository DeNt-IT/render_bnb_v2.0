import '../../../../css/Eli/ByePage/ByePageInfo.css';

import Details from './InfoBye/Details';
import MoreInfo from './InfoBye/MoreInfo';

const Info = () => 
{
    return (
        <div className="gallery-wrap">
            <div className="info-container">
                <Details/>
            </div>
            <div className="add-info-for-bye">
                <MoreInfo/>
            </div>
            
        </div>
    );
};

export default Info;
