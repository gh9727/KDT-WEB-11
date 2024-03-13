import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import ExamProps from './ExamProps';
import ExamState from './ExamState';
import ExamStateFunc from './ExamStateFunc';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <SayFunction />
      {/* <ExamProps
        text="App 컴포넌트에서 넘겨준 text props 입니다."
        valid="콘솔에 띄우기 성공!"
      /> */}
      {/* <ExamState /> */}
      {/* <ExamStateFunc /> */}
    </div>
  );
}

export default App;
