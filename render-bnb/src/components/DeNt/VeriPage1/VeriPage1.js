import "../../../css/DeNt/VeriPage1/VeriPage1.css"
import { VeriPageHeader } from "./VeriPage1Comps/VeriHeader/VeriHeader";
import { Veri1Main } from "./VeriPage1Comps/Veri1Main/Veri1Main";

export const VeriPage1 = () => {

    return(

        <div className = 'veri-page-wrapper'>
            <VeriPageHeader></VeriPageHeader>
            <Veri1Main></Veri1Main>
        </div>
    );
}