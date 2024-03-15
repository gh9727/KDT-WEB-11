import { useState } from 'react';
function HandlerEx2() {
  const [textColor, settextColor] = useState('black');
  const [string, setString] = useState('검정색 글씨');
  const red = () => {
    settextColor('red');
    setString('빨간색 글씨');
  };
  const blue = () => {
    settextColor('blue');
    setString('파란색 글씨');
  };
  return (
    <div>
      <h1 style={{ color: textColor }}>{string}</h1>
      <button onClick={red}>빨간색</button>
      <button onClick={blue}>파란색</button>
    </div>
  );
}
export default HandlerEx2;
