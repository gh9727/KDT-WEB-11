import PropTypes from 'prop-types';

import React from 'react';

export default function FunctionComponent({ name, children }) {
  //   const { name } = props;
  return (
    <div>
      <h1>Hi {name}</h1>
      <div>Hi {children}</div>
    </div>
  );
}

FunctionComponent.defaultProps = {
  // name: '홍길동',
  // time: '2시',
};
// 각 변수에 데이터 타입 지정 + import 해둬야함
// 데이터 타입이 안맞아도 실행은 되나 개발자 도구창에서 warning을 제공함
FunctionComponent.propType = {
  // isRequired 는 defaultProps 없을 때 작동
  name: PropTypes.string.isRequired,
  // time: PropTypes.number,
};
