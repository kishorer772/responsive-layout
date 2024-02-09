import React from 'react';
import PostItem from './PostItem';
import { useScroll, motion } from 'framer-motion';

const PostsData = ({ posts }) => {
  const { scrollYProgress } = useScroll();
  console.log('PostsData ~ scrollYProgress:', scrollYProgress);
  return (
    <>
      <div className="filters  mx-auto xs:hidden sm:hidden md:hidden lg:w-9/12 lg:flex-column ">
        <div className="w-full header__filter">
          <p className="text-center">Filters</p>
        </div>
        <div className="flex p-5 flex-grow flex-shrink w-full list-none justify-between">
          <select name="" id="" className="flex-shrink min-w-10 max-w-4xl">
            <option value="">Select</option>
            <option value="">123</option>
            <option value="">123</option>
          </select>
          <select name="" id="">
            <option value="">123</option>
            <option value="">123</option>
            <option value="">123</option>
          </select>
          <select name="" id="">
            <option value="">123</option>
            <option value="">123</option>
            <option value="">123</option>
          </select>
          <select name="" id="">
            <option value="">123</option>
            <option value="">123</option>
            <option value="">123</option>
          </select>
          <select name="" id="">
            <option value="">123</option>
            <option value="">123</option>
            <option value="">123</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap flex-shrink-1 w-full md:w-10/12 lg:w-9/12 mx-auto">
        <motion.div
          style={{
            scaleX: scrollYProgress,
            position: 'fixed',
            top: 0,
            backgroundColor: 'red',
            left: 0,
            right: 0,
            height: '5px',
            transformOrigin: ' 0%',
          }}
        />
        {posts.map((post, idx) => (
          <PostItem post={post} key={idx}></PostItem>
        ))}
      </div>
    </>
  );
};

export default PostsData;
