import { useRef, useState } from 'react';
function RefExam2() {
  const userRef = useRef(null);
  const titleRef = useRef(null);
  const register = () => {
    if (userRef.current.value.trim() === '') {
      userRef.current.focus();
    } else if (titleRef.current.value.trim() === '') {
      titleRef.current.focus();
    }
  };
  return (
    <div>
      작성자: <input type="text" ref={userRef} />
      제목: <input type="text" ref={titleRef} />
      <button onClick={register}>작성</button>
    </div>
  );
}
export default RefExam2;
