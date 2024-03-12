import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clock from './Clock';
import Exam from './Exam';
import reportWebVitals from './reportWebVitals';

// 1. 연습
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <h1>Hello world</h1>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
// );

// 2. 연습
// Clock 랜더링 setInterval => 1초마다 그려주는 메서드
// setInterval(() => {
//   // 브라우저에서 전체가 아닌 "시간" 부분만 새로고침 되고 있다
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

// 3. 연습
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }, 1000);

// 실습 1.
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Exam />
    </React.StrictMode>
  );
}, 1000);

// 실습 2.
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
