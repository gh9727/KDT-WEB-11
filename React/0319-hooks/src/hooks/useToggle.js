import React, { useState } from 'react';

// 매개 변수를 받아도 되고 받지 않는다면 직접 지정한 false 값 사용하겠다는 의미
export default function useToggle(initState = false) {
  // value: 토글의 상태
  // setValue: 토글 상태를 변화 시키는 setter
  const [value, setValue] = useState(initState);
  // 토글 상태 스위칭
  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue];
}
