import '../../../../../css/Eli/ByePage/ByePageHeader.css';
import search from '../../../../../img/Eli/Category/search.png';

const SearchByePage = () => 
{
        return (
            <div className="searchByePage">
                <div className="search-ByePage">
                    <div className="search-itemByePage, first-itemByePage">
                        <div className="search-labelByePage">Почніть пошук</div>
                    </div>
                    
                    <div className="search-iconByePage">
                        <img src={search} alt="Heart" className="search-imgByePage" />
                    </div>
                </div>
 
            </div>);
};
    
export default SearchByePage;
    