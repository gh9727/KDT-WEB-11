import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function App3() {
  // useSelector(): store에 있는 상태 가져오기
  const isVisible = useSelector((store) => store.isVisible);

  return (
    <div>
      <h1>React Redux 예제</h1>
      <h2>isVisible 값은 {isVisible ? '참' : '거짓'}</h2>
      <Box1 />
    </div>
  );
}
const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1: </h2>
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2: </h2>
      <Box3 />
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3: </h2>
      <Box4 />
    </div>
  );
};

const Box4 = () => {
  // action을 발생시켜줌
  const dispatch = useDispatch();
  return (
    <minv className="Box">
      <h2>Box4: </h2>
      <button onClick={() => dispatch({ type: 'CHANGE' })}>Change 버튼</button>
      {/* <button onClick={() => dispatch(plus())}>PLUS</button> */}
    </minv>
  );
};
