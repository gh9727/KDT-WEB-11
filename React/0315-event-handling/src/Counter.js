import { useState } from 'react';
function Counter() {
  let [number, setNumber] = useState(0);
  const increase = () => {
    number += 1;
    setNumber(number);
  };
  const alertMsg = (e, msg) => {
    alert(`${msg}~ 현재 숫자는 ${number}`);
  };
  const alertMsg2 = (e, msg) => {
    console.log(e);
    alert(`${msg}~ 현재 숫자는 ${number}`);
  };

  /*
   * currentTarget: 이벤트 핸들러가 있는 요소
   * target은 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 즉 내가 클릭한 자식 요소
   */
  const handleEvent = (e) => {
    console.log('e.target', e.target);
    console.log('e.currentTarget', e.currentTarget);
  };
  return (
    <div>
      <h1>Function Component Event</h1>
      <h2>{number}</h2>
      {/* 인자가 없는 경우 */}
      <button onClick={increase}>더하기</button>

      {/* 인자가 있는 경우 */}
      <button onClick={() => alertMsg('hello~')}>alert 출력</button>
      <button onClick={(e) => alertMsg2(e, 'hello~')}>alert2 출력</button>

      {/* 추가) e.target vs e.currentTarget */}
      <button
        onClick={(e) => {
          handleEvent(e);
        }}
      >
        <span>target vs currentTarget</span>
      </button>
    </div>
  );
}
export default Counter;
