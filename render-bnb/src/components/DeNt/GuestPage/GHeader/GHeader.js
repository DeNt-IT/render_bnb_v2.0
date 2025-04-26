import "../../../../css/DeNt/GuestPage/GuestPage.css"
import Logo from "./GHeaderComps/Logo";
import SugText from "./GHeaderComps/SugText";
import Profile from "./GHeaderComps/Profile";
function GHeader() {

    return(

        <div className = 'header-wrapper'>
            <div className = 'logo-container'>
                <Logo></Logo>
            </div>
            <div className = 'sug-text-container'>
                <SugText></SugText>
            </div>
            <div className = 'profile-container'>
                <Profile></Profile>
            </div>
        </div>
    );
}

export default GHeader;