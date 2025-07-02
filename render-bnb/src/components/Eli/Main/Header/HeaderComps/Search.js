import '../../../../../css/Eli/MainPage/MainPageHeader.css';
import search from '../../../../../img/Eli/Category/search.png';
import { useEffect, useState } from 'react';

const Search = ({ onSearch }) => {
    const [destinations, setDestinations] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const res = await fetch('/api/products/destinations');
                if (res.ok) {
                    const data = await res.json();
                    setDestinations(data);
                }
            } catch (err) {
                console.error('Error loading destinations', err);
            }
        };
        fetchDestinations();
    }, []);

    const handleSearch = () => {
        if (onSearch) onSearch(query);
    };

    return (
        <div className="search">
            <div className="search-item first-item">
                <div className="search-label">Куди</div>
                <input
                    type="text"
                    list="destinations-list"
                    className="search-input"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Введіть напрям"
                />
                <datalist id="destinations-list">
                    {destinations.map(d => (
                        <option key={d} value={d} />
                    ))}
                </datalist>
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
            <div className="search-icon" onClick={handleSearch}>
                <img src={search} alt="Search" className="search-img" />
            </div>
        </div>
    );
};

export default Search;
