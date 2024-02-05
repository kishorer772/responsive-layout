import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div className="flex-col p-1  h-full xs:flex-1  w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
      <div className="bg-lime-600 p-5 rounded-xl">
        <div className="m-2 h-full p-2 shrink mt-1">
          <p className="text-2xl p-4 text-white xs:text-center  ">
            {post.title}
          </p>
          <p className="p-4 text-sm  ">{post.body}</p>
        </div>
        <div className="flex justify-center  xs:flex-row sm:flex-row md:flex-col xl:flex-row ">
          <span className=" bg-blue-500 p-2  cursor-pointer   text-center xs:mr-1 sm:mr-1  md:mb-1  xl:mr-1   ">
            Comment
          </span>
          <span className=" bg-red-500  p-2  cursor-pointer   text-center xs:mr-1  sm:mr-1 md:mb-1  xl:mr-1  ">
            Comment
          </span>
          <span className=" bg-fuchsia-500 p-2 cursor-pointer   text-center">
            Comment
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
