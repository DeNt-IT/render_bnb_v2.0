import "../../../../css/DeNt/GuestPage/GuestPage.css"
import GLeftMain from "./GMainComps/GLeftMain";
import GRightMain from "./GMainComps/GRightMain";
function GMain() {

    return(

        <div className="main-wrapper">
            <GLeftMain></GLeftMain>
            <GRightMain></GRightMain>
        </div>
    );
}

export default GMain;