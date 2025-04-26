import "../../../../../css/DeNt/GuestPage/GuestPage.css"
import { useNavigate } from "react-router-dom";
function GRightMain() {

    const navigate = useNavigate();

    function handleClickProf(event) {

        navigate("/profeditpage");
    }

    return(

        <div className="right-main-wrapper">
            <div className="right-main-content-container">
                <div className="right-main-content-text-container">
                    <div style = {{marginTop: 15, fontSize: 20}} className="right-main-text">
                        <b>Редагувати Профіль</b>
                    </div>
                    <div className="right-main-content-text-container">
                        Ваш профіль на HomeFU є важливою складовою кожного бронювання. Створіть профіль, щоб інші господарі та гості могли більше про вас дізнатися.
                    </div>
                </div>
                <div className="right-main-content-button-container">
                    <div className="right-main-button" onClick={handleClickProf}>
                        <div style={{fontFamily: 'Nunito Sans', color: '#fff'}}>
                            Редагувати
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GRightMain;