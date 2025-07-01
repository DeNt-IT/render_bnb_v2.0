import '../../../../../css/Eli/ByePage/ByePageHeader.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import { fetchCurrentUser } from '../../../../../services/currentUserService';

function User() {
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

    return (
        <div className='userByePage-wrap'>
            <div className='burgerByePage-container'>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className='usericonByePage-container'>
                {profilePic ? (
                    <img src={profilePic} alt='User' className='irina-userByePage' />
                ) : (
                    <FontAwesomeIcon icon={faUser} />
                )}
            </div>
        </div>
    );
}

export default User;