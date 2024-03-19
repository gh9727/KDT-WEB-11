import { Component } from 'react';
class refSample1 extends Component {
  handleFocus = () => {
    // input focus 처리
    console.log('this:', this);
    console.log('this.myInput:', this.myInput);
    this.myInput.focus();
  };
  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}
export default refSample1;
// myInput은 컴포넌트(클래스)의 멤버 변수
