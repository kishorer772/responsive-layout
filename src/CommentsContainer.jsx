import React from 'react';
import usePostsData from './hooks/usePostsData';
import PostsData from './PostsData';
import useInternetConnection from './hooks/useInternetConnection';

const CommentsContainer = () => {
  const internetComms = useInternetConnection();
  const { posts, error, loading } = usePostsData(internetComms);

  return (
    <>
      {internetComms && posts && <PostsData posts={posts}></PostsData>}
      {internetComms && loading && (
        <p className="text-2xl w-full h-screen text-center">Loading...</p>
      )}
      {!internetComms ? (
        <div className="bg-red-300 backdrop-blur-sm hover:backdrop-blur-lg p-5   ">
          <p
            className=" w-full text-center bg-local text-white h-screen backdrop-blur-sm hover:backdrop-blur-lg bg-fixed bg-transparent"
            style={{
              backgroundImage: `url(
              'https://plus.unsplash.com/premium_photo-1706625695154-d8a6a1c275d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              )`,
            }}
          >
            Connect Internet
          </p>
        </div>
      ) : null}
    </>
  );
};

export default CommentsContainer;
