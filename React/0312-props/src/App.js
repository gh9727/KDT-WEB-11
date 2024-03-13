import logo from './logo.svg';
import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Button from './Button';
import ExamProps from './ExamProps';
import ExamProps2 from './ExamProps2';

function App() {
  const name = '코딩온';
  const title = '나의 하루는 4시 40분에 시작된다';
  const author = '김유진';
  const price = '13,500원';
  const type = '자기계발서';

  return (
    <div className="App">
      {/* <FunctionComponent name={name}></FunctionComponent>
      <FunctionComponent></FunctionComponent>
      <FunctionComponent name={13}>자식 내용</FunctionComponent>
      <FunctionComponent name={[1, 2, 3]} time="14시" />
      <hr /> */}
      {/* 함수형과 클래스형 컴포넌트 중복 사용 시 prop-types 하나만 뜨는 경우 발생 */}
      {/* <ClassComponent name={name}></ClassComponent>
      <ClassComponent></ClassComponent>
      <hr />
      <Button link="https://www.google.com">
        <span>Google</span>
      </Button> */}
      {/* <ExamProps></ExamProps>
      <hr /> */}
      <ExamProps2
        title={title}
        author={author}
        price={price}
        type={type}
      ></ExamProps2>
    </div>
  );
}

export default App;
