const initialState = 0;

// 사용자가 입력한 값을 받아와야함
const ExamReducer = (state = initialState, action) => {
  switch (action.type) {
    case '+':
      return state + action.plus;
    case '-':
      return state - action.minus;
    default:
      return state;
  }
};
export default ExamReducer;
