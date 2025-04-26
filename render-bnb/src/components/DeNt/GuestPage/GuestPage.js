import "../../../css/DeNt/GuestPage/GuestPage.css"
import GHeader from "./GHeader/GHeader";
import GMain from "./GMain/GMain";

function GuestPage() {

    return(

        <div className = 'page-wrapper'>
            <GHeader></GHeader>
            <GMain></GMain>
        </div>
    );
}

export default GuestPage;