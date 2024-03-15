function SyntheticEvent() {
  function syntheticClick(e) {
    // 콘솔에 기록되는 e 객체는 SyntheticEvent (합성 이벤트)
    // : 리액트가 DOM 이 아닌 VirtualDOM 을 사용하는 것 처럼
    // 웹 브라우저의 nativeEvent 가 아닌 nativeEvent 를 감싼 SyntheticEvent 사용 -> React 에서 자체적으로 만듬

    // 결론: React에서 onClick, onChange 등등 같은 이벤트들은 브라우저의 기본 이벤트가 아님.
    //       브라우저의 이벤트를 포함하고 있는 리액트의 고유한 이벤트 객체
    console.log(e);
    console.log('Synthetic Event Click!');
  }
  function printInputValue(e) {
    // input 의 변화된 내용을 보고 싶을 때 사용: input value가 달라질때 마다 출력
    console.log(e.target.value);
  }
  return (
    <div>
      <button onClick={syntheticClick}>synthetic event 콘솔 찍기</button>
      <br />
      <input type="text" placeholder="입력하세요" onChange={printInputValue} />
    </div>
  );
}
export default SyntheticEvent;
