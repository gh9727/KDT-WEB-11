import { Component } from 'react';
import PropTypes from 'prop-types';

class ExamProps extends Component {
  render() {
    const { text, valid } = this.props;
    const validClick = () => {
      console.log(valid);
    };
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={validClick}>콘솔 메세지</button>
      </div>
    );
  }
}

ExamProps.defaultProps = {
  text: '이건 기본 text props입니다.',
};
ExamProps.propType = {
  text: PropTypes.string.isRequired,
};
export default ExamProps;
