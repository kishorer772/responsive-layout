import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const PostItem = ({ post }) => {
  return (
    <AnimatePresence>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex-col p-1  h-full xs:flex-1  w-full md:w-1/2 lg:w-1/3 xl:w-1/3"
      >
        <div className="bg-lime-600 p-5 rounded-xl">
          <div className="m-2 h-60 p-2 shrink mt-1">
            <p className="text-xl p-4 text-white text-ellipsis overscroll-hidden  xs:text-center  ">
              {post.title}
            </p>
            <p className="p-2  w-52 text-sm text-ellipsis  overflow-hidden h-min ">
              {post.body}
            </p>
          </div>
          <div className="flex justify-center  xs:flex-row sm:flex-row md:flex-col xl:flex-row ">
            <motion.span
              whileTap={{ opacity: 0.8, color: 'white' }}
              className=" bg-blue-500 p-2  cursor-pointer   text-center xs:mr-1 sm:mr-1  md:mb-1  xl:mr-1   "
            >
              Comment
            </motion.span>
            <motion.span
              whileTap={{ opacity: 0.8, color: 'white' }}
              className=" bg-red-500  p-2  cursor-pointer   text-center xs:mr-1  sm:mr-1 md:mb-1  xl:mr-1  "
            >
              Comment
            </motion.span>
            <motion.span
              whileTap={{ opacity: 0.8, color: 'white' }}
              className=" bg-fuchsia-500 p-2 cursor-pointer   text-center"
            >
              Comment
            </motion.span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PostItem;
