import React from 'react';
import PostItem from './PostItem';

const PostsData = ({ posts }) => {
  return (
    <>
      <div className="filters  mx-auto xs:hidden sm:hidden md:hidden lg:w-9/12 lg:flex ">
        <ul className="flex list-none justify-around">
          <li>filter</li>
          <li>filter</li>
          <li>filter</li>
          <li>filter</li>
        </ul>
      </div>
      <div className="flex flex-wrap flex-shrink-1 w-full md:w-10/12 lg:w-9/12 mx-auto">
        {posts.map((post, idx) => (
          <PostItem post={post} key={idx}></PostItem>
        ))}
      </div>
    </>
  );
};

export default PostsData;
