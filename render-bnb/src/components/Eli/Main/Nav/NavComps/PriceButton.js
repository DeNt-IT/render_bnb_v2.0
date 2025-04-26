import React, { useState } from 'react';
import '../../../../../css/Eli/MainPage/MainPageNav.css';

const PriceButton = ({ onToggle }) => 
{
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => 
    {
        setIsChecked(!isChecked);
        onToggle(); 
    };

    return (
        <div className="nav-price">
            <div className="pricetext">Загальна сума до оподаткування</div>

            <div className="price-switch">
                <div className={`switch ${isChecked ? 'checked' : ''}`}>
                    <div className="switch-circle" onClick={handleToggle}></div>
                </div>
            </div>
            
        </div>
    );
};

export default PriceButton;
