import React, { useState } from 'react';

export default function Exam2() {
  const [textColor, setTextColor] = useState({
    content: '검정색 글씨',
    text: '검정색',
    color: 'black',
  });
  const black = () => {
    setTextColor({ content: '검정색 글씨', text: '검정색', color: 'black' });
  };
  const red = () => {
    setTextColor({ content: '빨간색 글씨', text: '빨간색', color: 'red' });
  };
  const blue = () => {
    setTextColor({ content: '파란색 글씨', text: '파란색', color: 'blue' });
  };
  return (
    <div>
      <h1 style={{ color: textColor.color }}>{textColor.content}</h1>
      <button onClick={black}>검정색</button>
      <button onClick={red}>빨간색</button>
      <button onClick={blue}>파란색</button>
    </div>
  );
}
