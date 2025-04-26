import "../../../../css/DeNt/ProfEditPage/ProfEditPage.css";
import { PLeftMain } from "./ProfMainComps/PLeftMain";
import { PRightMain } from "./ProfMainComps/PRightMain";

export const ProfMain = () => {

    return(
        <div className="prof-main-wrapper">
            <PLeftMain></PLeftMain>
            <PRightMain></PRightMain>
        </div>
    );
}