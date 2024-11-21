// Comment.js
import React from 'react';

const Comments = ({ content }) => {
  return content ? (
    <div className="comment">
      <p>{content}</p>
    </div>
  ) : (
    <p>No comments yet.</p>
  );
};
export default Comments;