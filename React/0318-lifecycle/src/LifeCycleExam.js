import React, { useState } from 'react';
import PostList from './PostList';
import axios from 'axios';

export default function LifeCycleExam() {
  const [realPosts, setRealPosts] = useState([]);
  async function fake() {
    const fakePosts = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return fakePosts.data;
  }

  return (
    <div>
      <PostList
        realPosts={realPosts}
        setRealPosts={setRealPosts}
        fakePosts={fake}
      />
    </div>
  );
}
