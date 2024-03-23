const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

// 컴포넌트에서 액션을 쉽게 발생시킬 수 있도록 함수 사용
export const plus = () => ({ type: PLUS }); // 함수에 return 생략 버전
export const minus = () => ({ type: MINUS });

// state 초기값 정의
const initialState = {
  number: 50,
};
// reducer 정의: 상태 변화를 일으키는 함수
const counterReducer = (state = initialState, action) => {
  // action 객체: {type:'XXX',payload: ?}
  switch (action.type) {
    case PLUS:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
};
export default counterReducer;
