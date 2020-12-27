import { combineReducers } from "redux";
import { RESET } from "../actions/quiz_actions";
import answersReducer from "./answersReducer";
import questionsReducer from "./questionsReducer";
import scoreReducer from "./scoreReducer";

const appReducer = combineReducers({
  questions: questionsReducer,
  answers: answersReducer,
  score: scoreReducer,
});

const rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
