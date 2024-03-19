import React, { useEffect } from 'react';

export default function PostList({ realPosts, setRealPosts, fakePosts }) {
  // useEffect를 사용할때 async ~ awiat 사용 주의사항
  // getPostf 함수 만든이유
  // : useEffect를 사용할 때는 비동기 작업을함수로 래핑한 다음 useEffect 콜백에서 호출끝남
  // : useEffect는 async ~ await(비동기 처리)를 사용하지 않음(문법)
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
