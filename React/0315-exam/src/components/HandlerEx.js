import { Component } from 'react';
class HandlerEx extends Component {
  state = {
    string: 'Hello World',
  };
  render() {
    return (
      <div>
        <h1>{this.state.string}</h1>
        <button
          onClick={() => {
            this.setState({ string: 'Goodbye World' });
          }}
        >
          클릭
        </button>
      </div>
    );
  }
}
export default HandlerEx;
