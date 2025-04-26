import "../../../css/DeNt/VeriPage2/VeriPage2.css"
import { VeriPageHeader } from "../../../components/DeNt/VeriPage1/VeriPage1Comps/VeriHeader/VeriHeader";
import { VeriPage2Main } from "./VeriPage2Main/VeriPage2Main";

export const VeriPage2 = () => {

    return(

        <div className="veri-page-2-wrapper">
            <VeriPageHeader></VeriPageHeader>
            <VeriPage2Main></VeriPage2Main>
        </div>
    );
}