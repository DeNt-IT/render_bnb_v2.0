import "../../../../../css/DeNt/GuestPage/GuestPage.css"
import pfp from "../../../../../assets/imgs/DeNt/GuestPage/Ellipse682.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import { fetchCurrentUser } from "../../../../../services/currentUserService";

function GLeftMain() {

    const navigate = useNavigate();
    const [profilePic, setProfilePic] = useState(null);
    const [name, setName] = useState('');

    useEffect(() => {
        fetchCurrentUser()
            .then(u => {
                if (u) {
                    if (u.profilePictureBase64) {
                        setProfilePic(u.profilePictureBase64);
                    }
                    if (u.displayName) {
                        setName(u.displayName);
                    }
                }
            })
            .catch(() => {});
    }, []);

    function handleClick(event) {

        navigate('/veripage1')
    }

    return(

        <div className="left-main-wrapper">
            <div className="left-main-top-section-container">
                <div className="left-main-top-section-box">
                    <div className="left-main-top-section-pfp-container">
                        <img src={profilePic} alt = 'pfp'/>
                    </div>
                    <div className="left-main-top-section-name-container">
                        <div className="left-main-top-section-name-text">
                            {name}
                        </div>
                        <div className="left-main-top-section-guest-text">
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="left-main-bottom-section-container">
                <div className="left-main-bottom-section-box">
                    <div className="left-main-bottom-box-section">
                        <div className="left-section-bottom-box-text">
                            <b>Підтверджена інормація про користувача {name}</b>
                        </div>
                    </div>
                    <div className="left-main-bottom-box-section">
                        <div className="left-section-bottom-box-text">
                            <FontAwesomeIcon icon={faCheck} /> Електронная адреса
                        </div>
                    </div>
                    <div className="left-main-bottom-box-section">
                        <hr />
                    </div>
                    <div className="left-main-bottom-box-section">
                        <div className="left-section-bottom-box-text">
                            <b>Веріфікація особи</b>
                        </div>
                    </div>
                    <div className="left-main-bottom-box-section">
                        <div style={{fontSize: 13}} className="left-section-bottom-box-text">
                            Перш ніж бронювати або приймати гостей на HomeFU, потрібно виконати цей крок.
                        </div>
                    </div>
                    <div className="left-main-bottom-box-section">
                        <div className="left-main-bottom-section-button" onClick={handleClick}>
                                <div style={{marginLeft: 15}} className="left-section-bottom-box-text">
                                    Веріфікація
                                </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default GLeftMain;