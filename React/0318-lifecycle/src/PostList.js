import React, { useEffect } from 'react';

export default function PostList({ realPosts, setRealPosts, fakePosts }) {
  useEffect(() => {
    setTimeout(async () => {
      const fakePost = await fakePosts();
      setRealPosts(fakePost);
    }, 2000);
  }, []);
  return (
    <div>
      <p>Post Lists</p>
      {realPosts.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        realPosts.map((value) => {
          return (
            <div>
              <p key={value.id}>{value.title}</p>
              <p key={value.id}>{value.body}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
