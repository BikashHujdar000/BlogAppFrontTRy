import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../Authentication/auth';
import { createComment } from '../Services/CommentSevice';
import styles from './PostCard.module.css';
import { toast } from 'react-toastify';

const PostCard = ({ post, handleCommentAdded }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCommentExpanded, setIsCommentExpanded] = useState({});
  const [comment, setComment] = useState({ content: "" });
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCommentClick = (postId) => {
    setIsCommentExpanded((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  const handleCommentChange = (event) => {
    setComment({ content: event.target.value });
  };

  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();

    const userId = user?.userDto?.id;
    createComment(postId, userId, comment)
      .then((response) => {
        console.log(response)
        toast.success("Comment Added SucessFully")
        handleCommentAdded();
      })
      .catch((error) => {
        toast.error("Failed to Comment")
        console.error("Error while posting comment:", error.response?.data || error.message);
      });
  };

  return (
    <div className={styles.postCardContainer}>
      {post && post.length > 0 ? (
        post.map((item) => (
          <div className={styles.postCard} key={item.postId}>
            <img
              src={item.postImage || "https://via.placeholder.com/500x300"}
              alt="Post"
            />
            <div className={styles.postCardBody}>
              <div className={styles.postCardTitle}>{item.title}</div>
              <div className={styles.postCardContent}>
                {isExpanded
                  ? item.content
                  : item.content.length > 100
                    ? item.content.slice(0, 100) + "..."
                    : item.content}
              </div>
              <a
                href="#!"
                className={styles.readMore}
                onClick={handleReadMore}
              >
                {isExpanded ? "Read less" : "Read more"}
              </a>

              <div className={styles.postCardActions}>
                <button>
                  <i className="fas fa-thumbs-up"></i> Like
                </button>
                <button onClick={() => handleCommentClick(item.postId)}>
                  <i className="fas fa-comment"></i> Comments: {item.comments.length}
                </button>
                <button>
                  <i className="fas fa-share"></i> Share
                </button>
              </div>

              {isCommentExpanded[item.postId] && (
                <div className={styles.commentsContainer}>
                  {item.comments && item.comments.length > 0 ? (
                    item.comments.map((comment, index) => (
                      <div key={index} className={styles.comment}>
                        <p>{comment.content}</p>
                      </div>
                    ))
                  ) : (
                    <p>No comments yet.</p>
                  )}

                  <form
                    onSubmit={(e) => handleCommentSubmit(e, item.postId)}
                    className={styles.commentForm}
                  >
                    <textarea
                      value={comment.content}
                      onChange={handleCommentChange}
                      placeholder="Write your comment here..."
                      rows="4"
                      className={styles.commentInput}
                    />
                    <button type="submit" className={styles.submitCommentBtn}>
                      Post Comment
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No posts available to display.</p>
      )}
    </div>
  );
};

export default PostCard;
