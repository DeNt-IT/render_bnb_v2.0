import '../../../../css/Eli/MainPage/MainPageHeader.css';

import Logo from './HeaderComps/Logo';
import List from './HeaderComps/List';
import Link from './HeaderComps/Link';
import User from './HeaderComps/User';

import Search from './HeaderComps/Search';
import Map from './HeaderComps/Map';

const Header = () => 
{
  	return (
    		<div className="header-wrap">

                <div className = "top-row-header">
                    <div className = 'logo-container-main'>
                        <Logo></Logo>
                    </div>
                    <div className = 'list-container'>
                        <List></List>
                    </div>
                    <div className = 'link-container'>
                        <Link></Link>
                    </div>
                    <div className = 'user-container'>
                        <User></User>
                    </div>
                </div>


                <div className ="botom-header">
                    <div className = 'search-container'>
                        <Search></Search>
                    </div>
                    <div className = 'map-container'>
                        <Map></Map>
                    </div>

                </div>

            </div>);
};

export default Header;
