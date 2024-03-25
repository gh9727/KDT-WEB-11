// PostList 컴포넌트 입니다.
import { useEffect, useState } from 'react';
import ExamItem from './ExamItem';
import { ExamItemProps } from './types';

const ExamList = () => {
  const [posts, setPosts] = useState<ExamItemProps[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await res.json();

      setPosts(jsonData.slice(0, 10));
    };

    setTimeout(() => {
      getPosts();
    }, 2000);
  }, []);

  return (
    <div className="ExamItem">
      <h1>Exam List</h1>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <ExamItem key={post.id} post={post} />;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ExamList;
