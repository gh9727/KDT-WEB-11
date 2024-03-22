import React, { useState } from 'react';

export default function Exam() {
  const [textInfo, setTextInfo] = useState({
    content: '안녕하세요',
    text: '사라져라',
    opacity: 1.0,
  });
  const changeText = () => {
    setTextInfo((prev) => {
      return prev.text === '사라져라'
        ? { ...prev, text: '보여라', opacity: 0 }
        : { ...prev, text: '사라져라', opacity: 1.0 };
    });
  };
  return (
    <div>
      <h1 style={{ opacity: textInfo.opacity }}>{textInfo.content}</h1>
      <button onClick={changeText}>{textInfo.text}</button>
    </div>
  );
}
