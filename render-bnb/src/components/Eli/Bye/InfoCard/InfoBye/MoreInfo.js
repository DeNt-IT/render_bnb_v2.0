import React, { useEffect, useState } from 'react';
import '../../../../../css/Eli/ByePage/ByePageMoreInfo.css';
import '../../../../../css/Eli/ByePage/ByePageComments.css';
import '../../../../../css/DeNt/AuthPages/AuthPages.css';
import star from '../../../../../img/Eli/Card/star.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const MoreInfo = ({ productId }) => {
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    if (!productId) return;
    fetch(`/api/products/${productId}/comments`)
      .then(res => res.json())
      .then(setComments);
  }, [productId]);

  const submitComment = async (e) => {
    e.preventDefault();
    const resp = await fetch(`/api/products/${productId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, content: commentText })
    });
    if (resp.ok) {
      const newComment = await resp.json();
      setComments([newComment, ...comments]);
      setUserName('');
      setCommentText('');
      setShowModal(false);
    }
  };

  const renderComment = (c) => (
    <div className='num-rev' key={c.id}>
      <div className='rev-block'>
        <FontAwesomeIcon icon={faUser} className='rev' />
        <div className='name-rev'>{c.userName}</div>
      </div>
      <div>{c.content}</div>
    </div>
  );

  const half = Math.ceil(comments.length / 2);
  const left = comments.slice(0, half);
  const right = comments.slice(half);

  return (
    <div>
      <div className='top-reting'>
        <img src={star} alt='Star' className='star-reting' />
        <div>5,0 . {comments.length} відгуків</div>
      </div>

      <div className='colum-rei'>
        <div className='colum-rei1'>
          <div>Чистота</div>
          <div className='row-rai'></div>
          <div>4,9</div>
        </div>
        <div className='colum-rei2'>
          <div>Точність</div>
          <div className='row-rai'></div>
          <div>5,0</div>
        </div>
      </div>

      <div className='colum-rei'>
        <div className='colum-rei1'>
          <div>Комунікація</div>
          <div className='row-rai2'></div>
          <div>4,8</div>
        </div>
        <div className='colum-rei2'>
          <div>Розташування</div>
          <div className='row-rai3'></div>
          <div>4,9</div>
        </div>
      </div>

      <button className='admin-add-btn' onClick={() => setShowModal(true)}>Add comment</button>

      <div className='rev-cont'>
        <div className='col1-rev'>
          {left.map(renderComment)}
        </div>
        <div className='col2-rev'>
          {right.map(renderComment)}
        </div>
      </div>

      {showModal && (
        <div className='comment-modal-overlay'>
          <div className='comment-modal'>
            <div className='comment-modal-header'>
              <h2>Add Comment</h2>
              <button className='comment-close-modal' onClick={() => setShowModal(false)}>×</button>
            </div>
            <form onSubmit={submitComment} className='comment-form'>
              <div className='auth-form-group'>
                <input
                  type='text'
                  placeholder='Your name'
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className='auth-form-group'>
                <textarea
                  placeholder='Comment'
                  value={commentText}
                  onChange={e => setCommentText(e.target.value)}
                  required
                />
              </div>
              <div className='admin-form-actions'>
                <button type='button' className='admin-cancel-btn' onClick={() => setShowModal(false)}>Cancel</button>
                <button type='submit' className='admin-submit-btn'>Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreInfo;
