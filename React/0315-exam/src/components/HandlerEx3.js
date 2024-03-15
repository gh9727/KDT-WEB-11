import { useState } from 'react';
function HandlerEx3() {
  const [text, setText] = useState('사라져라');
  const [state, setState] = useState(1.0);
  function Func() {
    if (text === '사라져라') {
      setText('보여라');
      setState(0);
    } else {
      setText('사라져라');
      setState(1.0);
    }
  }
  return (
    <div>
      <button onClick={Func}>{text}</button>
      <h1 style={{ opacity: state }}>안녕하세요</h1>
    </div>
  );
}
export default HandlerEx3;
