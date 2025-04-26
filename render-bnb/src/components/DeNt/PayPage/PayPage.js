import "../../../css/DeNt/PayPage/PayPage.css"
import { PPHeader } from "./PayPageComps/PPHeader";
import { PPMain } from "./PayPageComps/PayPageMain/PayPageMain";
import { PFooter } from "../ProfEditPage/Footer/ProjFooter";

export const PayPage = () => {

    return(

        <div className = "pay-page-wrapper">
            <PPHeader></PPHeader>
            <PPMain></PPMain>
        </div>
    );
}