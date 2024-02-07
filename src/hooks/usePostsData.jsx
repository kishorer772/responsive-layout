import React, { useEffect, useState } from 'react';

const usePostsData = (active) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(active);
  const error = {};

  useEffect(() => {
    if (active) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((posts) => {
          setPosts(posts);
          setLoading(false);
        })
        .catch((error) => {
          error.error = 'Failed to Fetch Data';
        });
    }
  }, [active]);
  return { posts, error, loading };
};

export default usePostsData;
