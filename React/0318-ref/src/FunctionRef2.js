import { useRef, useState } from 'react';
function FunctionRef2() {
  let idRef = useRef(1);
  let [id, setId] = useState(10);
  let idVar = 20;
  const plusIdRef = () => {
    idRef.current += 1;
    console.log(idRef.current);
  };
  const plusIdState = () => {
    setId(++id);
  };
  return (
    <div>
      <h1>Ref Sample - 로컬 변수</h1>
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>plus Ref</button>

      <h2>{id}</h2>
      <button onClick={plusIdState}>plus State</button>

      <h2>{idVar}</h2>
      <button
        onClick={() => {
          idVar += 1;
          console.log(idVar);
        }}
      >
        plus 일반 변수
      </button>
    </div>
  );
}
export default FunctionRef2;
