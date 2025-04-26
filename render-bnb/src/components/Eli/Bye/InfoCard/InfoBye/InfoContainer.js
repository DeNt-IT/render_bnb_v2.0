import React from 'react';
import ilona from '../../../../../img/Eli/Gallery/Ilona.png';
import bedroom from '../../../../../img/Eli/Gallery/bedroom.png';

import bedroom1 from '../../../../../img/Eli/Gallery/Bedroom1.jpg';
import bedroom2 from '../../../../../img/Eli/Gallery/Bedroom2.jpg';
import bedroom3 from '../../../../../img/Eli/Gallery/Bedroom3.jpg';
import bedroom4 from '../../../../../img/Eli/Gallery/Bedroom4.png';
import bedroom5 from '../../../../../img/Eli/Gallery/Bedroom5.png';
import bedroom6 from '../../../../../img/Eli/Gallery/Bedroom6.png';
import bedroom7 from '../../../../../img/Eli/Gallery/Bedroom7.jpg';
import bedroom8 from '../../../../../img/Eli/Gallery/Bedroom8.jpg';
import bedroom9 from '../../../../../img/Eli/Gallery/Bedroom9.jpg';
import bedroom10 from '../../../../../img/Eli/Gallery/Bedroom10.jpg';


import '../../../../../css/Eli/ByePage/ByePageInfo.css';

const InfoContainer = () => {
    return (
        <div className="info-container">
            <div className="title-details">
                Помешкання для оренди, господар - Ілона
                <img src={ilona} alt="ilona" className="ilona-img" />
            </div>
            <div className="add-details">4 гостя, 1 спальня, 2 ліжка, 1 ванна кімната</div>
            <div className="conditions">
                <div className="title-conditions">Окреме робоче місце</div>
                <div className="add-conditions">Зона спільного користування з Wi-Fi, яка добре підходить для роботи.</div>
                <div className="title-conditions">Самостіне прибуття</div>
                <div className="add-conditions">Самостійне прибуття за допомогою ключа в сейфі.</div>
                <div className="title-conditions">Безкоштовне скасування бронювання до 30 грудня</div>
            </div>
            <div className="more-info">
                Вона оснащена кондиціонером і безкоштовним Wi-Fi. Ви можете відпочити на затишній терасі, насолоджуючись видом на море. Квартира розміром 24 метри з повністю обладнаною кухнею з мікрохвильовою пічю, вітальнею, телевізором з плоским екраном, власною ванною кімнатою з пральною машиною, феном. Є холодильник, плита, чайник. Спальне місце - двоспальне ліжко. На території комплексу розташовані магазин, аптека, кав'ярня та інші сервіси, поруч...
            </div>

            <div className= "bedroom-info-cont">
                <div className='title-bedroom'>Місце для сну</div>
                <img src={bedroom} alt="Bedroom" className="bedroom-img" />
                <div className= "titlt-bedroom">Спальня</div>
                <div className= "add-info-beedroom">1 ліжко king-size</div>
            </div>


            <div>
                <div className='title-facil-list'>Які тут зручності</div>

                <div className= "facilities-container">
                    <div className='block1-facilities'>
                        <div className='bloc-img-list'>
                            <div className='bedroom-list'>
                                <img src={bedroom1} alt="Bedroom" className="bedroom-list-img" />
                            </div>
                            <div>Кухня</div> 
                        </div>
                        <div className='bloc-img-list'>
                            <div className='bedroom-list'>
                                <img src={bedroom2} alt="Bedroom" className="bedroom-list-img" />
                            </div>
                            <div>Окреме місце для сну</div> 
                        </div>
                        <div className='bloc-img-list'>
                            <div className='bedroom-list'>
                                <img src={bedroom3} alt="Bedroom" className="bedroom-list-img" />
                            </div>
                            <div>Ліфт</div> 
                        </div>
                        <div className='bloc-img-list'>
                            <div className='bedroom-list'>
                                <img src={bedroom4} alt="Bedroom" className="bedroom-list-img" />
                            </div>
                            <div>Портативна система кондиціонування</div> 
                        </div>
                        
                        <div className='bloc-img-list'>
                            <div className='bedroom-list'>
                                <img src={bedroom5} alt="Bedroom" className="bedroom-list-img" />
                            </div>
                            <div>Фен</div> 
                        </div>
                    </div>


                    <div className='block2-facilities'>
                        <div className='bloc-img-list'>
                            <div className='bedroom-list'>
                                <img src={bedroom6} alt="Bedroom" className="bedroom-list-img" />
                            </div>
                            <div>Wi-Fi</div> 
                        </div>
                        <div className='bloc-img-list'>
                            <div className='bedroom-list'>
                                <img src={bedroom7} alt="Bedroom" className="bedroom-list-img" />
                            </div>
                            <div>Телевізор HDTV 32 -дюймовий</div> 
                        </div>
                        <div className='bloc-img-list'>
                            <div className='bedroom-list'>
                                <img src={bedroom8} alt="Bedroom" className="bedroom-list-img" />
                            </div>
                            <div>Пральна та сушильна машина</div> 
                        </div>
                        <div className='bloc-img-list'>
                            <div className='bedroom-list'>
                                <img src={bedroom9} alt="Bedroom" className="bedroom-list-img" />
                            </div>
                            <div>Укомплектована кухня</div> 
                        </div>
                        <div className='bloc-img-list'>
                            <div className='bedroom-list'>
                                <img src={bedroom10} alt="Bedroom" className="bedroom-list-img" />
                            </div>
                            <div>Паркінг</div> 
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        




    );
};

export default InfoContainer;
