import React from 'react';
import useToggle from '../hooks/useToggle';

export default function Faq() {
  const [isFaqOpen, setIsFaqOpen] = useToggle();
  return (
    <div>
      <h1>custom hook (useToggle) 예제</h1>
      <div onClick={setIsFaqOpen} style={{ cursor: 'pointer' }}>
        Q. 리액트에서 커스텀 훅을 만들수 있나요?
      </div>
      {isFaqOpen && <div>A. 네 그럼요 가능!</div>}
    </div>
  );
}
