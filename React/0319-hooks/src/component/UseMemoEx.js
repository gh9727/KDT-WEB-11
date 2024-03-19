import React, { useMemo, useState } from 'react';

/* useMemo
   - 메모이제이션으로 "수행한 연산값"을 "기억"함으로써 불필요한 연산 최소화
 */

export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // 임의의 큰 연산을 하는 함수
  // 버튼을 누를 때에도, input 입력할 때에도 연산이 이뤄짐(calc 호출)
  // [before]
  // const calc = () => {
  //   console.log('열심히 계산 중 . . .');
  //   for (let i = 0; i < 10000000; i++) {}
  //   return count ** 2;
  // };

  // [after]
  // count 의 값이 바뀔 때만 calc 함수 실행시키기
  // input의 상태가 바뀌면 컴포넌트는 리랜더링, 이때 calc 연산되지 않게 만들기

  const calc = useMemo(() => {
    console.log('열심히 계산 중 . . .');
    for (let i = 0; i < 10000000; i++) {}
    return count ** 2;
  }, [count]);

  return (
    <div>
      <h1>UseMemo Ex</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Plus
      </button>
      {/* before
      <div>count: {count}</div> 
      <div>calc: {calc()}</div>
      */}
      <div>calc: {calc}</div>
    </div>
  );
}
