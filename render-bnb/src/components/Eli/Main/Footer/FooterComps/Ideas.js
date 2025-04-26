import '../../../../../css/Eli/MainPage/MainPageFooter.css';

const categories = 
[
    'Популярні',
    'Мистецтво й культура',
    'Відпочинок на відкритому повітрі',
    'Гори',
    'Пляж',
    'Категорії',
    'Чим зайнятися'
];


const ideas = 
[
    [
        { name: 'Canmore', type: 'Оренда квартир' },
        { name: 'Тусон', type: 'Оренда кондомініумів' },
        { name: 'Анахаїм', type: 'Оренда помешкань' }
    ],
    [
        { name: 'Benalmadena', type: 'Оренда будинів' },
        { name: 'Jasper', type: 'Помешкання для відпич...' },
        { name: 'Монтерей', type: 'Помешкання для відпич...' }
    ],
    [
        { name: 'Марбелья', type: 'Оренда будинків' },
        { name: 'Мауїнт-Б’ю', type: 'Оренда будинків' },
        { name: 'Paso Robles', type: 'Помешкання для відпич...' }
    ],
    [
        { name: 'Mixac', type: 'Оренда квартир' },
        { name: 'Devonport', type: 'Помешкання для відпич...' },
        { name: 'Санта-Барбара', type: 'Оренда заміських буд...' }
    ],
    [
        { name: 'Prescott', type: 'Оренда зрубів' },
        { name: 'Mallacoota', type: 'Помешкання для відпич...' },
        { name: 'Sonoma', type: 'Помешкання для відпич...' }
    ],
    [
        { name: 'Скоттсдейл', type: 'Оренда помешкань із...' },
        { name: 'Ейвіска', type: 'Помешкання для відпич...' },
        { name: 'Показати більше', type: 'Оренда квартир' }
    ]
];

const Ideas = () => 
{
    return (
        <div className="ideas-container">
            <h2>Ідеї для майбутніх поїздок</h2>
            <div className="ideas-categories">
                {categories.map((category, index) => (
                    <div key={index} className={`category ${index === 0 ? 'firstitem' : ''}`}>
                        {category}
                    </div>
                ))}
            </div>
            
            <div className="ideas-list">
                {ideas.map((column, colIndex) => (
                    <div key={colIndex} className="column">
                        {column.map((idea, ideaIndex) => (
                            <div key={ideaIndex}>
                                <div>{idea.name}</div>
                                <div className="addideas">{idea.type}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ideas;
