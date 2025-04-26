import "../../../../../css/DeNt/PayPage/PayPage.css"
import { PPLeftMain } from "./PayPageMainComps/PayPageLeftMain";
import { PPRightMain } from "./PayPageMainComps/PayPageRightMain";

export const PPMain = () => {

    return(

        <div className = "pp-main-wrapper">
            <PPLeftMain></PPLeftMain>
            <PPRightMain></PPRightMain>
        </div>
    );
}