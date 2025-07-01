import "../../../../../css/DeNt/GuestPage/GuestPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { logout } from '../../../../../services/authService';
import { fetchCurrentUser } from '../../../../../services/currentUserService';

function Profile() {
    const navigate = useNavigate();
    const [profilePic, setProfilePic] = useState(null);

    useEffect(() => {
        fetchCurrentUser()
            .then(u => {
                if (u && u.profilePictureBase64) {
                    setProfilePic(u.profilePictureBase64);
                }
            })
            .catch(() => {});
    }, []);

    function handleLogout() {
        logout();
        navigate('/');
    }

    return (
        <div className='profile-wrapper'>
            <div className='profile-burger-container'>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className='profile-user-container'>
                {profilePic ? (
                    <img src={profilePic} alt='User' className='irina-user' />
                ) : (
                    <FontAwesomeIcon icon={faUser} />
                )}
            </div>
            <button className='profile-logout-btn' onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default Profile;