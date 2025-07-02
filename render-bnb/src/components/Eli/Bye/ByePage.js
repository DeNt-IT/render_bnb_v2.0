import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../../css/Eli/ByePage/ByePageHeader.css';

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
      <h2>{product.name}</h2>
      <div>Location: {product.location}</div>
      <div>Rating: {product.rating}</div>
      <div>Price: {product.price}</div>
      <div className="gallery">
        <img src={product.imageBase64} alt={product.name} style={{ maxWidth:'300px' }} />
        {product.photoBase64 && product.photoBase64.map((p,i) => (
          <img key={i} src={p} alt={product.name+i} style={{ maxWidth:'300px' }} />
        ))}
      </div>
      <h3>Comments</h3>
      <form onSubmit={submitComment}>
        <input value={userName} onChange={e=>setUserName(e.target.value)} placeholder="Your name" required />
        <textarea value={commentText} onChange={e=>setCommentText(e.target.value)} required />
        <button type="submit">Add Comment</button>
      </form>
      {comments.map(c => (
        <div key={c.id} className="comment">
          <strong>{c.userName}</strong>: {c.content}
        </div>
      ))}
    </div>
  );
};

export default ByePage;
