import '../../../../../css/Eli/MainPage/MainPageHeader.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCurrentUser } from '../../../../../services/currentUserService';

function User() {
    const navigate = useNavigate();
    const [profilePic, setProfilePic] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchCurrentUser()
                .then(u => {
                    if (u && u.profilePictureBase64) {
                        setProfilePic(u.profilePictureBase64);
                    }
                })
                .catch(() => {});
        }
    }, []);

    function handleClick() {
        const token = localStorage.getItem('token');
        navigate(token ? '/guestpage' : '/authpage');
    }

    return (
        <div className='user-wrap' onClick={handleClick}>
            <div className='burger-container'>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className='usericon-container'>
                {profilePic ? (
                    <img src={profilePic} alt='User' className='irina-user' />
                ) : (
                    <FontAwesomeIcon icon={faUser} />
                )}
            </div>
        </div>
    );
}

export default User;