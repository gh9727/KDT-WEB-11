import React, { useReducer } from 'react';

const initState = { value: 0 };
const reducer = (prevState, action) => {
  console.log('prevState', prevState);
  console.log('action', action.type); //
  switch (action.type) {
    case 'INCREMENT':
      return { value: prevState.value + 1 };

    case 'DECREMENT':
      return { value: prevState.value - 1 };

    case 'RESET':
      return { value: initState.value };

    default:
      break;
  }
};

export default function UseReducerEx() {
  /* useReducer: [state, dispatch]를 리턴함
   * reducer: state를 업데이트하는 함수
   * dispatch: 액션을 발생시키는 함수 (액션: state가 어떻게 변경되어야 하는지에 대한 힌트)
   * state: 현재상태(initState 형태(ex: 객체)를 따름)
   * initState: 초깃값
   */
  const [state, dispatch] = useReducer(reducer, initState);

  const increase = (e) =>
    dispatch({ type: 'INCREMENT', event: e.target.value });
  const decrease = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'RESET' });
  return (
    <div>
      <h1>UseReducer 예제</h1>
      <h2>{state.value}</h2>
      <button onClick={increase}>plus</button>
      <button onClick={decrease}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
