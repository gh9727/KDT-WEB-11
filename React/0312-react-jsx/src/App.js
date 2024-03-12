import logo from './logo.svg';
import './App.css';

function App() {
  const name = '땅강아지';
  const animal = '강아지';
  const style = {
    color: 'blue',
    fontSize: '48px',
    backgroundColor: 'yellow',
  };
  let a = 5;
  let b = 3;
  const title = 'Hello World';
  return (
    <div className="App">
      <h2>
        제 반려 동물의 이름은 {name}입니다
        <br />
        {name}는 {animal}입니다.
      </h2>

      <p>{3 + 5 === 8 ? <h2>정답입니다!</h2> : <h2>오답입니다!</h2>}</p>
      <p>{a > b && <h2>a가 b보다 큽니다</h2>}</p>
      <br />
      <br />
      <div id="header">
        <div id="title">{title}</div>
        <br />
      </div>
      <label htmlFor="id">아이디 : </label>
      <input type="text" id="id" />
      <br />
      <label htmlFor="pw">비밀번호 : </label>
      <input type="text" id="pw" />
      {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello World</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header> */}
      {/* JSX 문법 */}
      {/* 1. 하나로 감싸인 요소 */}
      {/* 2. JavaScript 표현식 사용
            - {} 로 감싸면 js 표현식 사용 가능
            - {} 에서 삼항 연산자 사용 가능 */}
      {/* <div>{name}안녕?</div>
      <div>{name === 'Codee' ? 'KDT 11기에요!' : '누구세요?'}반갑다</div> */}
      {/* 
        3. style 속성
         - React에서 DOM 요소에 스타일 적용시 문자열X → 객체 사용  
         - 스타일 이름 중 하이푼(-) 포함시 camelCase로 작성해야함 → - 는 빼기로 적용될 수 있음
    */}
      {/* <div style={style}>하이~</div>
      <div
        style={{
          color: 'red',
          fontSize: '36px',
          backgroundColor: 'aqua',
        }}
      >
        하이하이~
      </div> */}
      {/* 
        4. className 사용
          - class 속성이 아닌 className 속성 사용
        5. 종료 태그가 없는 태그의 사용
          - 기존의 종료 태그가 없는 태그 사용하더라도 종료 태그를 작성해야함 or
            self-closing 사용하면 됨 ex) <br />, <img /> 등등... */}
    </div>
  );
}

export default App;
