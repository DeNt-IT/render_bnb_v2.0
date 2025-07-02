import '../../../../css/Eli/ByePage/ByePageGallery.css';

import Title from './GalleryBye/Title';
import Photo from './GalleryBye/Photo';

const Gallery = ({ product }) => {
  return (
    <div className="gallery-wrap">
      <div className="title-container">
        <Title
          name={product.name}
          rating={product.rating}
          location={product.location}
        />
      </div>
      <div className="photo-container">
        <Photo images={[product.imageBase64, ...(product.photoBase64 || [])]} />
      </div>
    </div>
  );
};

export default Gallery;

