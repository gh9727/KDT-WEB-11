import { useState } from 'react';
const SayFunction = () => {
  // 배열 비구조화 할당
  const [message, setMessage] = useState('welcome!');
  console.log(useState('welcome!')); //['welcome!',f]
  const onClickEnter = () => {
    setMessage('안녕하세요~');
  };
  const onClickLeave = (e) => {
    console.log(e.target);
    setMessage('안녕히가세요~');
  };
  const alertMsg = (e, msg) => {
    console.log(e.target);
    alert(`${msg}`);
  };
  // 'welcome!' : message 변수의 초기값으로 들어감
  // useState(초기값) - 숫자, 문자, 배열 등등 자유롭게 넣음
  // f: setMessage() - message state 값을 바꾸는 함수
  // 결론 : 각각의 state마다 state 값을 변경해주는 함수를 따로 만듬
  return (
    <div>
      {/* React에서는 괄호 없음 ! 
        - HTML: onclick="onClickEnter()" -> 문자열 형식으로 호출문 등록
        - JS: addEventListener('click',onClickEnter) -> 괄호 없애 함수를 바로 실행
              클릭이 발생했을 때 함수 호출되도록
        - React: onClick={onClickEnter} -> 괄호 X 함수 바로 실행 X*/}

      <h1>{message}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      {/* 함수에 인자 보내기: 인자가 있는 함수는 익명함수로 감싸서 처린 */}
      <button
        onClick={(e) => {
          alertMsg(e, 'msg');
        }}
      >
        alert 출력
      </button>
    </div>
  );
};
export default SayFunction;
