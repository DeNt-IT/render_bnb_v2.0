import '../../../../../css/Eli/MainPage/MainPageHeader.css';
import search from '../../../../../img/Eli/Category/search.png';

const Search = () => {
    return (
        <div className="search">
            <div className="search-item, first-item">
                <div className="search-label">Куди</div>
                <div className="search-placeholder">Odessa, Ukraine</div>
            </div>
            <div className="separator"></div>
            <div className="search-item">
                <div className="search-label">Прибуття</div>
                <div className="search-placeholder">1 листопада</div>
            </div>
            <div className="separator"></div>
            <div className="search-item">
                <div className="search-label">Виїзд</div>
                <div className="search-placeholder">20 листопада</div>
            </div>
            <div className="separator"></div>
            <div className="search-item">
                <div className="search-label">Хто</div>
                <div className="search-placeholder">2 гостей</div>
            </div>
            <div className="search-icon">
            <img src={search} alt="Heart" className="search-img" />
            </div>
        </div>
    );
};

export default Search;
