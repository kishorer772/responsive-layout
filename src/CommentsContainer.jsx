import React from 'react';
import usePostsData from './hooks/usePostsData';
import PostsData from './PostsData';
import useInternetConnection from './hooks/useInternetConnection';
import { Images } from './assets/images/Images';

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
              backgroundImage: `url(${Images.internetDown})`,
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
