import "../../../../../css/DeNt/VeriPage1/VeriPage1.css"
import { Veri1LeftMain } from "./Veri1MainComps/Veri1LeftMain";
import { Veri1RightMain } from "./Veri1MainComps/Veri1RightMain";

export const Veri1Main = () => {

    return(
        
        <div className = "veri-1-main-wrapper">
            <Veri1LeftMain></Veri1LeftMain>
            <Veri1RightMain></Veri1RightMain>
        </div>
    );
}