import './App.css';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefExam from './RefExam';
import FunctionRef1 from './FunctionRef1';
import FunctionRef2 from './FunctionRef2';
import RefExam2 from './RefExam2';
function App() {
  return (
    <div className="App">
      {/* 클래스형 컴포넌트: ref 사용 1. 콜백함수 */}
      {/* <RefSample1 /> */}
      {/* <hr /> */}
      {/* 클래스형 컴포넌트: ref 사용 2. createRef 함수 */}
      {/* <RefSample2 /> */}
      {/* <RefExam /> */}

      {/* 함수형 컴포넌트: useRef()로 DOM 요소에 접근 */}
      {/* <FunctionRef1 /> */}
      <hr />
      {/* 함수형 컴포넌트: useRef()를 로컬 변수로 사용 */}
      {/* <FunctionRef2 /> */}
      <RefExam2 />
    </div>
  );
}

export default App;
