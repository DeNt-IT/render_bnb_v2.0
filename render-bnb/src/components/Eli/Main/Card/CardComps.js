import React from 'react';
import '../../../../css/Eli/MainPage/MainPageCard.css';
import Card from './CardComps/Card';

/*Функция (Webpack) для жинамического ИМПОРТ ФАЙЛОВ из дирректории*/
const imagesContext = require.context('../../../../img/Eli/Card', false, /\.(png|jpe?g|svg)$/);

/*возвращает МАССИВ КЛЮЧЕЙ (путей к файлу)*/
const images = imagesContext.keys().map((key) => 
{
    return { path: imagesContext(key), name: key };
});

/*map СОЗДАЕТ МАССИВ ОБЬЕКТОВ, содержит путь к изображению и его имя*/
const sortedImages = images
    .map(image => 
    {/*добавляет к каждому обьекту свойство number - номер который извлечен с имени файла*/
        /*извлечение числа из имени файла*/
        const match = image.name.match(/card(\d+)/);
        if (match) 
        {
            return { ...image, number: parseInt(match[1], 10) };
        }
        return null;
    })
    .filter(image => image !== null) /*убирает обьекты которые не содержат номер*/
    .sort((a, b) => a.number - b.number); /*СОРТИРУЕТ ИЗОБРАЖЕНИЯ ПО НОМЕРАМ*/

/*массив обьектов, рейтинг, диапазон дат, цена*/
const defaultData = 
[
    { rating: 4.88, dateRange: '1-10 лист.', price: 70 },
    { rating: 4.72, dateRange: '5-12 лист.', price: 80 },
    { rating: 4.65, dateRange: '7-15 лист.', price: 65 },
    { rating: 4.95, dateRange: '10-20 лист.', price: 90 },
    { rating: 4.55, dateRange: '2-8 лист.', price: 60 },
    { rating: 4.78, dateRange: '9-17 лист.', price: 75 },
    { rating: 4.84, dateRange: '11-19 лист.', price: 85 },
    { rating: 4.62, dateRange: '4-14 лист.', price: 50 },
    { rating: 4.90, dateRange: '6-13 лист.', price: 95 },
    { rating: 4.75, dateRange: '8-16 лист.', price: 77 },
    { rating: 4.80, dateRange: '3-9 лист.', price: 68 },
    { rating: 4.85, dateRange: '12-20 лист.', price: 83 }
];

/*расчет количества дней*/
const calculateDays = (dateRange) => 
{
    /*split разделяет строку дат на две части НАЧАЛО иКОНЕЦ*/
    const [start, end] = dateRange.split(' ')[0].split('-').map(day => parseInt(day, 10));
    /*map преобразует строку в число*/

    return end - start + 1; /*возврат +1, типо ночь*/
};


/*создание компонента списка карточек*/
/*отвечает за то, чтобы подготовить и передать эти данные дочернему компоненту Card*/
const CardsList = ({ isChecked }) => 
{
    return (
        <div className="card-container">
            {sortedImages.slice(0, 12).map((image, index) => 
            {
                /*slice 12 изображений из отсортированного массива*/
                /*map создает массив компонентов Card, каждый получает свои данные, ТИПО цикла*/
                const days = calculateDays(defaultData[index].dateRange);
                const pricePerNight = defaultData[index].price;
                let totalPrice = pricePerNight;

                /*отображать ли общую строимость или только за ночь*/
                /*!! передается из родительского компонента, то есть из компонента который рендерит CardsList*/
                if (isChecked) { totalPrice = pricePerNight * days; }

                return (
                    /*данные передаются через пропсы в Card*/
                    <Card
                        key={index}
                        image={image.path}
                        rating={defaultData[index].rating}
                        dateRange={defaultData[index].dateRange}
                        price={totalPrice}
                        days={days}
                        isChecked={isChecked} /*CardsList передаёт isChecked в каждый экземпляр Card*/
                        index={index}
                    />
                );
            })}
        </div>
    );
};

export default CardsList;
