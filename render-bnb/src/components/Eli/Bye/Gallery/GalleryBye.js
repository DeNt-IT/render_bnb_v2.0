import '../../../../css/Eli/ByePage/ByePageGallery.css';

import Title from './GalleryBye/Title';
import Photo from './GalleryBye/Photo';

const Gallery = () => {
    return (
        <div className="gallery-wrap">
            <div className="title-container">
                <Title />
            </div>
            <div className="photo-container">
                <Photo />
            </div>
        </div>
    );
};

export default Gallery;
