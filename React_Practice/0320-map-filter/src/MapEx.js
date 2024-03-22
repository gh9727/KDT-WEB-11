import React, { useState, useRef } from 'react';

export default function MapEx() {
  const [userInfo, setUserInfo] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const register = () => {
    setUserInfo([...userInfo, { name: inputName, email: inputEmail }]);
    nameRef.current.value = '';
    emailRef.current.value = '';
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        ref={nameRef}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        ref={emailRef}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
      />
      <button onClick={register}>등록</button>
      {userInfo.map((value, index) => {
        return (
          <h1 key={index}>
            {value.name} : {value.email}
          </h1>
        );
      })}
    </div>
  );
}
