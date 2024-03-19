import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
/* useCallback
  - 매번 함수를 호출하지 않고, 함수를 기억해두었다가 필요할 때마다 함수를 재사용
 */
export default function UseCallBackEx({ postId }) {
  const [post, setPost] = useState({});

  // [before]
  //   const getPosts = async function fake() {
  //     console.log('data fetching.....');
  //     const res = await axios.get(
  //       `https://jsonplaceholder.typicode.com/posts/${postId}`
  //     );
  //     setPost(res.data);
  //   };
  //

  // [after]
  /* useCallback 실습
   - useCallback 훅으로 메모이제이션 -> 의존성 배열에 postId 가 변경되지 않는 한
   -  getPosts 다시 호출하지 않음 -> 필요한 순간에만 api 요청을 날림
  */
  const getPosts = useCallback(async () => {
    console.log('data fetching.....');
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    setPost(res.data);
  }, [postId]);

  /* useEffect 의존성 배열에 "함수"
   * 컴포넌트가 리랜더링 -> 함수가 재생성 (주소값 변경) -> getPosts 재호출
   */
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      <h1>UseCallBack 예제</h1>
      {post.id ? post.title : '로딩중...'}
    </div>
  );
}
