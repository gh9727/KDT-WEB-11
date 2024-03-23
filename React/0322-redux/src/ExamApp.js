import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ExamApp() {
  const money = useSelector((store) => store.money);
  const dispatch = useDispatch();
  const inputValue = useRef();
  const [moneyState, setMoneyState] = useState(0);
  return (
    <div>
      <h1>코딩온 은행</h1>
      <h2>잔액 : {money}원</h2>
      <input
        type="text"
        ref={inputValue}
        onChange={(e) => {
          setMoneyState(Number(e.target.value));
        }}
      />
      <button
        onClick={() =>
          dispatch(
            { type: '+', plus: Number(moneyState) },
            (inputValue.current.value = '')
          )
        }
      >
        입금
      </button>
      <button
        onClick={() =>
          dispatch(
            { type: '-', minus: Number(moneyState) },
            (inputValue.current.value = '')
          )
        }
      >
        출금
      </button>
    </div>
  );
}
