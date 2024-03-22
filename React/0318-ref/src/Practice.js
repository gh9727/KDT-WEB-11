import React from 'react';
import { useRef, useState } from 'react';

export default function Practice() {
  let varRef = useRef(4);
  const [num, setNum] = useState(14);
  const minus = () => {
    setNum(num - 1);
  };
  const plus = () => {
    varRef.current += 1;
  };
  return (
    <div>
      <h1>{num}</h1>
      <h1>{varRef.current}</h1>
      <button onClick={minus}>State : -1</button>
      <button onClick={plus}>Ref : +1</button>
    </div>
  );
}
