import "../../../../../css/DeNt/VeriPage1/VeriPage1.css"
import { VeriPageHeaderLogo } from "./VeriHeaderComps/VeriPageHeaderLogo";
import { VeriPageHeaderInfo } from "./VeriHeaderComps/VeriPageHeaderInfo";

export const VeriPageHeader = () => {

    return(

        <div className="veri-page-header-container">
            <VeriPageHeaderLogo></VeriPageHeaderLogo>
            <VeriPageHeaderInfo></VeriPageHeaderInfo>
        </div>
    );
}