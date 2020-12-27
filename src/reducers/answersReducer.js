import { SET_ANSWER } from "../actions/answers_actions";

const answersReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ANSWER:
      return { ...state, [action.id]: { userAnswer: action.payload } };
    default:
      return state;
  }
};

export default answersReducer;
