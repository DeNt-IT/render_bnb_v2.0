import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../../css/Eli/ByePage/ByePageHeader.css';
import HeaderBye from './Header/HeaderBye';
import GalleryBye from './Gallery/GalleryBye';
import InfoBye from './InfoCard/InfoBye';
import CommentsSection from './CommentsSection';
import Footer from '../Main/Footer/FooterComp';

const ByePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
    fetch(`/api/products/${id}/comments`)
      .then(res => res.json())
      .then(setComments);
  }, [id]);

  const submitComment = async (e) => {
    e.preventDefault();
    const resp = await fetch(`/api/products/${id}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, content: commentText })
    });
    if (resp.ok) {
      const newComment = await resp.json();
      setComments([newComment, ...comments]);
      setCommentText('');
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="ByePage-wrap">
      <HeaderBye />
      <GalleryBye product={product} />
      <InfoBye product={product} />
      {/* <CommentsSection
        comments={comments}
        userName={userName}
        commentText={commentText}
        setUserName={setUserName}
        setCommentText={setCommentText}
        onSubmit={submitComment}
      /> */}
      <Footer />
    </div>
  );
};

export default ByePage;

