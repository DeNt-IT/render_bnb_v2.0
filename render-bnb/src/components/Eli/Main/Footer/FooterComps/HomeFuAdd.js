import '../../../../../css/Eli/MainPage/MainPageFooter.css';

const sections = 
[
    {
        title: 'Підтримка',
        items: 
        [
            'Довідковий центр',
            'AirCover',
            'Протидія дискримінації',
            'Підтримка людей з інвалідністю',
            'Варіанти скасування бронювань',
            'Надіслати скаргу від сусідів'
        ]
    },
    {
        title: 'Прийом гостей',
        items: 
        [
            'Перетворити помешкання на HomeFu',
            'AirCover для господарів',
            'Ресурси про прийом гостей',
            'Форум спільноти',
            'Відповідальний прийом гостей'
        ]
    },
    {
        title: 'HomeFu',
        items: 
        [
            'Новини',
            'Нові функції',
            'Вакансії',
            'Інвестори',
            'Тимчасове житло від HomeFu'
        ]
    }
];

const HomeFuAdd = () => 
{
    return (
        <div className="homefuadd-container">
            {sections.map((section, index) => (
                <div className="column" key={index}>
                    <h3>{section.title}</h3>
                    <ul>
                        {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default HomeFuAdd;
