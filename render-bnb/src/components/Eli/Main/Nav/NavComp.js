import Category from './NavComps/Category';
import FilterButton from './NavComps/FilterButton';
import PriceButton from './NavComps/PriceButton';

const Nav = ({ onToggle, selectedCategory, onCategoryChange }) =>
{
    return (
        <div className="nav-container">
            <div className='category-container'>
                <Category selectedCategory={selectedCategory} onSelect={onCategoryChange} />
            </div>
            <div className='filter-container'>
                <FilterButton />
            </div>
            <div className='price-container'>
                <PriceButton onToggle={onToggle} />
            </div>
        </div>
    );
}

export default Nav;
