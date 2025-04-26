import '../../../../css/Eli/MainPage/MainPageFooter.css';

import Ideas from './FooterComps/Ideas';
import HomeFuAdd from './FooterComps/HomeFuAdd';
import Bottom from './FooterComps/Bottom';

const Footer = () => 
{
    return (
        <div className="footer-container">
            <div className = 'top-container'>
                <Ideas/>       
            </div>
            <div className = 'mid-container'>
                <HomeFuAdd />    
            </div>
            <div className = 'bottom-container'>
                <Bottom />
            </div>
        </div>
    );
}

export default Footer;
