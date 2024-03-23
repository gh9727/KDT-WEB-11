import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';
import ExamReducer from './ExamReducer';

// combineReducers: 여러 개의 리듀서를 하나로 합침
// js 파일로 만든 reducer 파일을 value 로 넣으면 된다.
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
  money: ExamReducer,
});

export default rootReducer;
