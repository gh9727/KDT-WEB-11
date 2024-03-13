import { useState } from 'react';
const ExamStateFunc = () => {
  let [number, setNumber] = useState(0);
  const increase = () => {
    number += 1;
    setNumber(number);
  };
  const decrease = () => {
    number -= 2;
    setNumber(number);
  };
  return (
    <div>
      <h3>{number}</h3>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
};
export default ExamStateFunc;
