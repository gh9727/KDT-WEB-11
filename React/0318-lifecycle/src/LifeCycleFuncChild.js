import React, { useEffect } from 'react';

export default function LifeCycleFuncChild({ number }) {
  // mount 시점에 실행 : <빈배열을 넣으면> mount 시점으로만 실행한다.
  // useEffect(함수, 빈배열)
  useEffect(() => {
    console.log('컴포넌트 마운트!!!');
  }, []);
  // unmount 시점에 실행 : <함수를 return 콜백함수 형식의 구조> 로 작성하면 unmoun 시점으로 실행한다.
  useEffect(() => {
    console.log('컴포넌트 언마운트 코드 전!!!');
    return () => {
      console.log('컴포넌트 언마운트!!!');
    };
  }, []);
  // mount & update 시점에 실행 : <배열에 데이터를 넣으면> mount & update 시점으로 실행한다.
  useEffect(() => {
    console.log('number', number);
  }, [number]);
  return (
    <>
      <h2>현재 숫자는 {number}입니다.</h2>
    </>
  );
}
