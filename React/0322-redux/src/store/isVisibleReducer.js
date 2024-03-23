const initialState = true;

const isVisibleReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE') {
    return !state;
  } else {
    return state;
  }
};
export default isVisibleReducer;
