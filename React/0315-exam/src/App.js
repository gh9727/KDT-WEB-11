import './App.css';
import HandlerEx from './components/HandlerEx';
import HandlerEx2 from './components/HandlerEx2';
import HandlerEx3 from './components/HandlerEx3';
import Total from './components/Total';
function App() {
  const fruit = ['복숭아', '사과', '바나나', '오렌지'];
  const color = [
    '검정',
    '하양',
    '빨강',
    '주황',
    '노랑',
    '초록',
    '파랑',
    '보라',
    '분홍',
  ];
  const color2 = [
    'black',
    'white',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'pink',
  ];
  return (
    <div className="App">
      {/* <HandlerEx /> */}
      {/* <HandlerEx2 /> */}
      {/* <HandlerEx3 /> */}
      <Total fruit={fruit} color={color} color2={color2} />
    </div>
  );
}

export default App;
