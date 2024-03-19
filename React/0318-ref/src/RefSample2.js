import { Component, createRef } from 'react';

class RefSample2 extends Component {
  // createRef를 사용해 만들 때는 컴포넌트 내부에서 변수에 createRef() 를 담아주는 것
  myInput = createRef();
  handleFocus = () => {
    // createRef를 이용한 경우 this.myInput 에서 current 까지 접근해줘야 요소에 접근 가능하다
    console.log('this.myInput.current:', this.myInput.current);
    this.myInput.current.focus();
  };
  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}
export default RefSample2;
