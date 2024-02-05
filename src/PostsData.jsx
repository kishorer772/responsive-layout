import React from 'react';
import PostItem from './PostItem';

const PostsData = ({ posts }) => {
  return (
    <div className="flex flex-wrap flex-shrink-1 ">
      {posts.map((post, idx) => (
        <PostItem post={post} key={idx}></PostItem>
      ))}
    </div>
  );
};

export default PostsData;
