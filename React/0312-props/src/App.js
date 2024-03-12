import logo from './logo.svg';
import './App.css';
import FunctionComponent from './FunctionComponent';

function App() {
  const name = '코딩온';
  return (
    <div className="App">
      <FunctionComponent name={name}></FunctionComponent>
      <FunctionComponent></FunctionComponent>
      <FunctionComponent name={13}>자식 내용</FunctionComponent>
    </div>
  );
}

export default App;
