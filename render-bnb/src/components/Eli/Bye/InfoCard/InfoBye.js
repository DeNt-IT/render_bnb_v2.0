import '../../../../css/Eli/ByePage/ByePageInfo.css';

import Details from './InfoBye/Details';
import MoreInfo from './InfoBye/MoreInfo';

const Info = ({ product }) => {
  return (
    <div className="gallery-wrap">
      <div className="info-container">
        <Details price={product.price} rating={product.rating} days={product.days} />
      </div>
      <div className="add-info-for-bye">
        <MoreInfo productId={product.id} />
      </div>
    </div>
  );
};

export default Info;

