import React, { useState, useEffect } from 'react';
import Base from '../Components/Base';
import PostCard from '../Components/PostCard';
import { getALlPost } from '../Services/postService';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {

  const [allPost, setAllPost] = useState({
    content: [],
    pageNumber: 0,
    pageSize: 5,
    lastPage: false,
    totalPages: 0,
  });


  const handleCommentAdded = () => {
    fetchPosts();
  }

  useEffect(() => {
    fetchPosts();
  }, []);


  const fetchPosts = async () => {
    const { pageNumber, pageSize } = allPost;

    try {
      const data = await getALlPost(pageNumber, pageSize);
      console.log(data);

      setAllPost((prevState) => ({
        ...prevState,
        content: [...prevState.content, ...data.content],
        pageNumber: prevState.pageNumber + 1,
        lastPage: prevState.pageNumber + 1 >= data.totalPages,
        totalPages: data.totalPages,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>


      <Base>


        <InfiniteScroll
          dataLength={allPost.content.length}
          next={fetchPosts} // fetch next post 
          hasMore={!allPost.lastPage}
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more posts to display</p>}
        >

          {allPost.content.length > 0 ? (
            <PostCard post={allPost.content} handleCommentAdded={handleCommentAdded} />
          ) : (
            <p>No posts available.</p>
          )}
        </InfiniteScroll>
      </Base>
    </div>
  );
};

export default Home;
