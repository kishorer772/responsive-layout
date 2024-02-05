import React from 'react';
import usePostsData from './hooks/usePostsData';
import PostsData from './PostsData';

const CommentsContainer = () => {
  const posts = usePostsData();
  console.log('Comments ~ posts:', posts);
  return <PostsData posts={posts}></PostsData>;
};

export default CommentsContainer;
