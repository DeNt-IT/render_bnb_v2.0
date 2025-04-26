import '../../../../css/Eli/ByePage/ByePageHeader.css';

import LogoByePage from './HeaderBye/LogoByePage';
import SearchByePage from './HeaderBye/SearchByePage';
import LinkByePage from './HeaderBye/LinkByePage';
import UserByePage from './HeaderBye/UserByePage';


const Header = () => 
{
  	return (
    		<div className="headerByePage-wrap">

                <div className = "top-row-headerByePage">
                    <div className = 'logoByePage-container'>
                       <LogoByePage/>
                    </div>
                    <div className = 'searchByePage-container'>
                        <SearchByePage/>
                    </div>
                    <div className = 'linkByePage-container'>
                        <LinkByePage/>
                    </div>
                    <div className = 'userByePage-container'>
                        <UserByePage/>
                    </div>
                </div>

            </div>);
};

export default Header;
