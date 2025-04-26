import React from 'react';
import '../../../../../css/Eli/ByePage/ByePageMoreInfo.css';

import star from '../../../../../img/Eli/Card/star.png';

import rev1 from "../../../../../img/Eli/Gallery/rev1.png";
import rev2 from "../../../../../img/Eli/Gallery/rev2.png";
import rev3 from "../../../../../img/Eli/Gallery/rev3.png";
import rev4 from "../../../../../img/Eli/Gallery/rev4.png";
import rev5 from "../../../../../img/Eli/Gallery/rev5.png";
import rev6 from "../../../../../img/Eli/Gallery/rev6.png";

const Details = () => {
    return (
        <div>
            <div className='top-reting'>
                <img src={star} alt="Star" className="star-reting" />
                <div>5,0 . 35 відгуків</div>
            </div>
            
            <div className='colum-rei'>
                <div className='colum-rei1'>
                    <div>Чистота</div>
                    <div className='row-rai'></div>
                    <div>4,9</div>
                </div>

                <div className='colum-rei2'>
                    <div>Точність</div>
                    <div className='row-rai'></div>
                    <div>5,0</div>
                </div>
            </div>

            <div className='colum-rei'>
                <div className='colum-rei1'>
                    <div>Комунікація</div>
                    <div className='row-rai2'></div>
                    <div>4,8</div>
                </div>

                <div className='colum-rei2'>
                    <div>Розташування</div>
                    <div className='row-rai3'></div>
                    <div>4,9</div>
                </div>
            </div>




            <div className="rev-cont">
                <div className='col1-rev'>
                    <div className='num-rev'>
                        <div className='rev-block'>
                            <img src={rev1} alt="rev1" className="rev" />
                            <div className='name-rev'>Oleksandr</div>
                        </div>
                        <div>Однозначно рекомендую ,все було на високому рівні )</div>
                    </div>
                    

                    <div className='num-rev'>
                        <div className='rev-block'>
                            <img src={rev2} alt="rev1" className="rev" />
                            <div className='name-rev'>Дарья</div>
                        </div>
                        <div>Всі фото відповідають дійсності. Вид з вікна просто неймовірний! Розташування дуже зручне, 2 хвилини пішки до моря і до траси здоров‘я.</div>
                    </div>
                    
                    <div className='num-rev'>
                        <div className='rev-block'>
                            <img src={rev3} alt="rev1" className="rev" />
                            <div className='name-rev'>Сергей</div>
                        </div>
                        <div>Все було чудово! Дарʼя завжди готова допомогти! Вид з вікна окремий вид задоволення.</div>
                    </div>

                </div>
                
                <div className='col2-rev'>

                    <div className='num-rev'>
                        <div className='rev-block'>
                            <img src={rev4} alt="rev1" className="rev" />
                            <div className='name-rev'>Дарина</div>
                        </div>
                        <div>Дуже дякую за гарні апартаменти! Дуже близько до пляжу, а сама квартира просто вау!</div>
                    </div>
                    <div className='num-rev'>
                        <div className='rev-block'>
                            <img src={rev5} alt="rev1" className="rev" />
                            <div className='name-rev'>Даниил</div>
                        </div>
                        <div>Все пройшло чудово! Місцерозташування квартири, саме житло та господар - 5 зірок! Рекомендую.</div>
                    </div>

                    <div className='num-rev'>
                        <div className='rev-block'>
                            <img src={rev6} alt="rev1" className="rev" />
                            <div className='name-rev'>Sveta</div>
                        </div>
                        <div>Дуже гарна квартира і дуже гарна господиня. Прекрасний вид на найкраще в світі море !!!! Це відпочинок для душі !!! Даша, дуже дуже вам дякую за все.</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Details;
