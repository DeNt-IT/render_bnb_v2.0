import React from 'react';
import '../../css/Eli/ByePage/ByePageComments.css';

const CommentsSection = ({ comments, userName, commentText, setUserName, setCommentText, onSubmit }) => (
  <div className="comments-section">
    <h3>Comments</h3>
    <form onSubmit={onSubmit} className="comment-form">
      <input
        value={userName}
        onChange={e => setUserName(e.target.value)}
        placeholder="Your name"
        required
      />
      <textarea
        value={commentText}
        onChange={e => setCommentText(e.target.value)}
        required
      />
      <button type="submit">Add Comment</button>
    </form>
    {comments.map(c => (
      <div key={c.id} className="comment">
        <strong>{c.userName}</strong>: {c.content}
      </div>
    ))}
  </div>
);

export default CommentsSection;
