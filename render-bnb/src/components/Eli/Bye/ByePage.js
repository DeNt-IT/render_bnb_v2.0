import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../../css/Eli/ByePage/ByePageHeader.css';
import HeaderBye from './Header/HeaderBye';
import GalleryBye from './Gallery/GalleryBye';
import InfoBye from './InfoCard/InfoBye';
import Footer from '../Main/Footer/FooterComp';

const ByePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="ByePage-wrap">
      <HeaderBye />
      <GalleryBye product={product} />
      <InfoBye product={product} />
      <Footer />
    </div>
  );
};

export default ByePage;

