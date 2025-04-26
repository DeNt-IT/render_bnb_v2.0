import "../../../css/DeNt/VeriPage3/VeriPage3.css"
import { VeriPageHeader } from "../VeriPage1/VeriPage1Comps/VeriHeader/VeriHeader"
import { Veri3Main } from "./VeriPage3Comps/VeriPage3Main";

export const VeriPage3 = () => {

    return(

        <div className="veri-3-wrapper">
            <VeriPageHeader></VeriPageHeader>
            <Veri3Main></Veri3Main>
        </div>
    );  
}