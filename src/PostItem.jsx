import React, { useId } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const PostItem = ({ post }) => {
  const key = useId();
  return (
    <AnimatePresence>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex-col p-1  h-full xs:flex-1  w-full md:w-1/2 lg:w-1/3 xl:w-1/3"
        key={key}
      >
        <div className="bg-lime-600 p-5 rounded-xl">
          <div className="flex-column m-2 h-60 p-2 mt-1">
            <p className="text-xl p-4 text-white text-ellipsis overscroll-hidden xs:text-center">
              {post.title}
            </p>
            <div className="flex-grow overflow-hidden">
              <p className="p-2 text-sm overflow-hidden whitespace-nowrap text-ellipsis">
                {post.body}
              </p>
            </div>
          </div>
          <div className="flex gap-1 justify-center flex-shrink xs:flex-col sm:flex-col md:flex-col xl:flex-row">
            <motion.span
              whileTap={{ opacity: 0.8, scale: 0.8 }}
              className="bg-blue-500 p-2    cursor-pointer rounded-md text-center "
            >
              Comment
            </motion.span>
            <motion.span
              whileTap={{ opacity: 0.8, scale: 0.8 }}
              className="bg-red-500 p-2  cursor-pointer rounded-md text-center "
            >
              Comment
            </motion.span>
            <motion.span
              whileTap={{ opacity: 0.8, scale: 0.8 }}
              className="bg-fuchsia-500    p-2 cursor-pointer  rounded-md text-center   "
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
