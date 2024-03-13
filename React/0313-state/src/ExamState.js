import { Component } from 'react';
class ExamState extends Component {
  // state 사용
  state = {
    number: 0,
  };
  render() {
    console.log(this.state);
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 2 });
          }}
        >
          +2
        </button>
        <br />
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default ExamState;
