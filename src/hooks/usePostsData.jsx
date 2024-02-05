import React, { useEffect, useState } from 'react';

const usePostsData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);
  return posts;
};

export default usePostsData;
