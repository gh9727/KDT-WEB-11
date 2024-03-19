import { useRef } from 'react';
function FunctionRef1() {
  // 1. ref 객체 만들기
  const inputRef = useRef(null);
  const handleFocus = () => {
    // 4. 객체.current 로 DOM 요소에 접근하여 기능 추가
    console.log('inputRef.current :', inputRef.current);
    inputRef.current.focus();
  };
  return (
    <>
      <p>(함수형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
      {/* 2. 만든 ref 객체 html 요소에 연결 */}
      <input type="text" ref={inputRef} />
      {/* 3. 버튼 이벤트 추가 */}
      <button onClick={handleFocus}>focus</button>
    </>
  );
}
export default FunctionRef1;
