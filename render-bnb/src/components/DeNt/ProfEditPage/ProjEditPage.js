import "../../../css/DeNt/ProfEditPage/ProfEditPage.css"
import GHeader from "../GuestPage/GHeader/GHeader";
import { ProfMain } from "./ProfMain/ProfMain";
import { PFooter } from "./Footer/ProjFooter";

export const ProfEditPage = () => {

    return(

        <div className="prof-p-wrapper">
            <GHeader></GHeader>
            <ProfMain></ProfMain>
            <PFooter></PFooter>
        </div>
    );
}